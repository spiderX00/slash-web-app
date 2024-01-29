import { Component, ContentChild, EventEmitter, Input, OnInit, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { paginatorParameters } from '../interfaces/paginator.interface';
import { SelectSearch } from './select-search';

const DEFAULT_SCROLL_VALUE = 1;
const DEFAULT_STRING_PARAMETER = "filterName";

@Component({
  selector: 'select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss'],
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class SelectSearchComponent extends SelectSearch implements OnInit {

  @Input() filterName: string = DEFAULT_STRING_PARAMETER;
  @Input() multiple: boolean = false;
  @Input() label!: string;
  @Input() addLabel!: string;
  @Input() controlName!: string;
  @Input() lookupItems!: Array<{ name?: string; id?: number; groupCode?: string }>;

  @ContentChild(TemplateRef) genericTemplate!: TemplateRef<any>;

  @Output() onFilterValues = new EventEmitter();
  @Output() onAdd = new EventEmitter();

  public form!: FormGroup;
  public control!: FormControl;
  public searchControl: FormControl = new FormControl<string>('');

  @ViewChild("activeSelect", { static: false }) activeSelect?: MatSelect;

  constructor(
    private controlContainer: ControlContainer,
    private renderer: Renderer2
  ) {
    super();
  }

  handeKeyUp(event$: any): void {
    this.name = event$?.target?.value as string;
    const parameters: paginatorParameters = {};
    if (this.name?.length > 0) {
      parameters.filterName = this.name;
    }
    this.onFilterValues.emit({ ...parameters });
  }

  onOpenedChange(): void {
    setTimeout(() => {
      if (this.activeSelect?.panel?.nativeElement != null) {
        this.renderer.listen(this.activeSelect?.panel.nativeElement, 'scroll', (event: Event) => {
          const panelElement = this.activeSelect?.panel.nativeElement;
          if (Math.round(panelElement.scrollHeight - panelElement.clientHeight - panelElement.scrollTop) <= DEFAULT_SCROLL_VALUE) {
            this.currentPage++;
            this.onFilterValues.emit({ ...this.queryParameters });
          }
        });
      }
    });
  }

  addItem(): void {
    this.activeSelect?.close();
    this.onAdd.emit();
  }

  reset(): void {
    this.searchControl.reset();
    this.activeSelect?.close();
  }

  ngOnInit(): void {
    this.form = <FormGroup>this.controlContainer.control;
    this.control = <FormControl>this.form.get(this.controlName);
  }

}
