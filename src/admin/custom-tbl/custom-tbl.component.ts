import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-custom-tbl',
  templateUrl: './custom-tbl.component.html',
  styleUrls: ['./custom-tbl.component.scss']
})
export class CustomTblComponent implements OnInit {

  @Input() tableName: string = 'Dynamic Table';
  @Input() headers: string[] = [];
  @Input() tableData: any[] = [];

  keys: string[] = [];
  filteredRows: any[] = [];
  searchText: string = '';
  sortColumn: number | null = null;
  sortDirection: string = '';

  ngOnInit() {
    if (this.tableData.length > 0) {
      this.keys = Object.keys(this.tableData[0]);
      this.filteredRows = [...this.tableData];
    }
  }

  filterRows() {
    this.filteredRows = this.tableData.filter((row) =>
      Object.values(row)
        .join(' ')
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }

  sortTable(index: number) {
    const key = this.keys[index];
    if (this.sortColumn === index) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = index;
      this.sortDirection = 'asc';
    }

    this.filteredRows.sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.filteredRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Table Data');
    XLSX.writeFile(workbook, `${this.tableName}.xlsx`);
  }

  getDynamicWidth(): number {
    const columnCount = this.headers.length;
  
    // Ensure minimum width if columns exceed a limit
    if (columnCount <= 4) {
      return 100 / columnCount; // Distribute width equally for fewer columns
    } else {
      return Math.max(100 / columnCount, 10); // Ensure minimum width for many columns
    }
  }
}
