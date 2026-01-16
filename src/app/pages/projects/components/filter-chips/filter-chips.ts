import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';

export interface FilterChip {
  id: string;
  label: string;
}

@Component({
  selector: 'app-filter-chips',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter-chips.html',
})
export class FilterChips {
  @Input({ required: true }) chips: FilterChip[] = [];
  @Input({ required: true }) activeId: string = 'all';

  @Output() activeIdChange = new EventEmitter<string>();

  select(id: string) {
    if (id === this.activeId) return;
    this.activeIdChange.emit(id);
  }
}
