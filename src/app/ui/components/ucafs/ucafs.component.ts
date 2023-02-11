import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from 'src/app/common/components/blanc/section/section.component';
import { NavModel } from 'src/app/common/components/blanc/models/nav.model';
import { BlankComponent } from 'src/app/common/components/blanc/blank.component';
import { UcafService } from './services/ucaf.service';
import { UcafModel } from './models/ucaf-model';
import { UcafPipe } from './pipes/ucaf.pipe';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService, ToastrType } from 'src/app/common/services/toastr.service';
import { ValidInputDirective } from 'src/app/common/valid-input.directive';
import { LoadingButtonComponent } from 'src/app/common/components/loading-button/loading-button.component';
import { RemoveByIdUcafModel } from './models/remove-by-id-ucaf.model';
import { SwalService } from 'src/app/common/services/swal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ucafs',
  standalone: true,
  imports: [CommonModule, BlankComponent, SectionComponent, UcafPipe, FormsModule, ValidInputDirective,
    LoadingButtonComponent],
  templateUrl: './ucafs.component.html',
  styleUrls: ['./ucafs.component.css']
})
export class UcafsComponent implements OnInit {

  ucafs: UcafModel[] = [];
  updateUcaf: UcafModel = new UcafModel();
  filterText: string = "";
  isAddForm: boolean = false;
  isUpdateForm: boolean = false;
  ucafType: string = "M";
  isLoading: boolean = false;

  navs: NavModel[] = [
    { routerLink: '/', name: 'Anasayfa', class: '' },
    { routerLink: '/ucafs', name: 'Hesap Planı', class: 'active' },
  ]

  constructor(private _ucaf: UcafService,
    private _toastr: ToastrService,
    private _swal: SwalService
  ) { }
  getAll() {
    this._ucaf.getAll(res => { this.ucafs = res.data; });
  }

  ngOnInit() { this.getAll(); }

  showAddForm() {
    this.isAddForm = true;
  }

  get(model: UcafModel) {
    this.updateUcaf = { ...model };
    this.isUpdateForm = true;
    this.isAddForm = false;
  }

  add(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      let model = new UcafModel();
      model.code = form.controls["code"].value;
      model.type = form.controls["type"].value;
      model.name = form.controls["name"].value;

      this._ucaf.add(model, (res) => {
        form.controls["code"].setValue("");
        form.controls["name"].setValue("");
        this.ucafType = "M";
        this.getAll();
        this.isLoading = false;
        this._toastr.toast(ToastrType.success, res.message, "Başarılı!");
      });
    }
  }
  update(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      // let model = new UcafModel();
      // model.id = form.controls["id"].value;
      // model.code = form.controls["code"].value;
      // model.type = form.controls["type"].value;
      // model.name = form.controls["name"].value;

      this._ucaf.update(this.updateUcaf, (res) => {
        this.cancel();
        this.getAll();
        this.isLoading = false;
        this._toastr.toast(ToastrType.success, res.message, "Güncelleme Başarılı!");
      });
    }
  }

  removeById(id: string) {
    this._swal.callSwal("Sil !!!", "Hesap Planı kodunu silmek istiyor musunuz?", () => {
      let model = new RemoveByIdUcafModel();
      model.id = id;

      this._ucaf.removeById(model, res => {
        this.getAll();
        this._toastr.toast(ToastrType.info, res.message, "Silme Başarılı!");
      });
    });
  }

  cancel() {
    this.isAddForm = false;
    this.isUpdateForm = false;
  }

  setTrClass(type: string) {
    if (type == "G") {
      return "text-primary";
    }
    else if (type == "A") {
      return "text-danger";

    }
    return "";

  }

}








