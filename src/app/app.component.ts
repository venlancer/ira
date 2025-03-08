import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter, Observable, Subscription } from 'rxjs';
import { GraphqlService } from './services/graphql.service';
import { GET_USERS } from './graphql/queries'; // Import query
import { SupabaseService } from './supabase.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    public lastScrollTop = 0;
    public activeNavbar: 'normal' | 'dynamic' | 'admin' = 'normal';
    public users:any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private renderer: Renderer2,
        private router: Router,
        @Inject(DOCUMENT) private document: any,
        private element: ElementRef,
        private graphqlService: GraphqlService,
        private supabaseService: SupabaseService,
    ) { }

    @HostListener('window:scroll', ['$event'])
    hasScrolled() {
        const st = window.pageYOffset;
        const navbar = document.getElementsByTagName('nav')[0];
        const delta = 5;
        const navbarHeight = 0;
        if (Math.abs(this.lastScrollTop - st) <= delta) return;

        if (st > this.lastScrollTop && st > navbarHeight) {
            if (navbar?.classList?.contains('headroom--pinned')) {
                navbar?.classList?.remove('headroom--pinned');
                navbar?.classList?.add('headroom--unpinned');
            }
        } else {
            if (st + window.innerHeight < document.body.scrollHeight) {
                if (navbar?.classList?.contains('headroom--unpinned')) {
                    navbar?.classList?.remove('headroom--unpinned');
                    navbar?.classList?.add('headroom--pinned');
                }
            }
        }
        this.lastScrollTop = st;
    }

    ngOnInit() {
        this.graphqlService.getApolloClient().query({ query: GET_USERS })
        .then(result => {
            debugger;
            this.users = result.data.ira_userCollection.edges.map(edge => edge.node);
        })
        .catch(error => {
          console.error('GraphQL Error:', error);
        });


        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
            // Determine the active navbar based on the current route
            const currentRoute = this.activatedRoute.snapshot.firstChild;

            if (currentRoute?.routeConfig?.path === ':pageName') {
                this.activeNavbar = 'dynamic'; // Show event navbar for dynamic pages
            } else if (currentRoute?.routeConfig?.path === 'admin') {
                this.activeNavbar = 'admin'; // Show admin navbar for admin pages
            } else {
                this.activeNavbar = 'normal'; // Default to normal navbar
            }
        });

        const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                if (window.outerWidth > 991) {
                    window.document.children[0].scrollTop = 0;
                } else {
                    window.document.activeElement.scrollTop = 0;
                }
                this.renderer.listen('window', 'scroll', () => {
                    const number = window.scrollY;
                    if (number > 150 || window.pageYOffset > 150) {
                        navbar?.classList?.add('headroom--not-top');
                    } else {
                        navbar?.classList?.remove('headroom--not-top');
                    }
                });
            });
        this.hasScrolled();
    }

}
