rmdir /s /q dist
ng build --prod --base-href="https://venlancer.github.io/ira/"
npx angular-cli-ghpages --dir=dist/ira

Above commands to update gh-pages after pushing code into github main branch
# ira