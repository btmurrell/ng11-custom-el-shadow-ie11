import { NgModule, Component, OnInit, ViewEncapsulation, 
  Injector, CUSTOM_ELEMENTS_SCHEMA 
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'fu-form',
  templateUrl: './fu-form.component.html',
  styleUrls: ['./fu-form.component.scss']
  ,encapsulation: ViewEncapsulation.ShadowDom
})
export class FuFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  exports: [FuFormComponent],
  entryComponents: [FuFormComponent],
  declarations: [FuFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FuFormModule {
  constructor(private readonly injector: Injector) {
    const el = createCustomElement(FuFormComponent, { injector: this.injector });
    if (!customElements.get('fu-form')) {
      customElements.define('fu-form', el);
    }
  }
}
