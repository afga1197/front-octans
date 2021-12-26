import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  searchUser: any;
  itempageUser: any = 5;
  pageUser: number;
  listUsers: any = [];
  listRoles: any = [];
  user: any = {};
  mostrar: boolean = true;

  constructor(private principalService: PrincipalService) { }

  ngOnInit(): void {
    this.loadUsers();
    this.loadRoles();
  }

  loadUsers() {
    this.principalService.getListUsers().subscribe(data => {
      this.listUsers = data;
    })
  }

  loadRoles() {
    this.principalService.getListRoles().subscribe(data => {
      this.listRoles = data;
    });
  }

  guardarUsuario(user: any) {
    if (this.validacion(user)) {
      let rol = {
        "id": user.rol
      }
      user.rol = rol;
      this.principalService.postSaveUser(user).subscribe(data => {
        alert(data);
        window.location.reload();
      }, err => {
        alert(err.error);
      });
    } else {
      alert("Por favor diligencie el formulario adecuadamente y en su totalidad");
    }
  }

  eliminarUsuario(id: any) {
    this.principalService.deleteUser(id).subscribe(data => {
      alert(data);
      window.location.reload();
    }, err => {
      alert(err.error);
    })
  }

  cargarDatosModificar(userUpdate: any) {
    this.user.id = userUpdate.id;
    this.user.nombre = userUpdate.nombre;
    this.user.rol = userUpdate.rol.id;
    this.user.activo = userUpdate.activo;
    this.mostrar = false;
  }

  cancelar() {
    this.user = {};
    this.mostrar = true;
  }

  actualizarUsuario(user: any) {
    if (this.validacion(user)) {
      let rol = {
        "id": user.rol
      }
      user.rol = rol;
      this.principalService.putUpdateUser(user).subscribe(data => {
        alert(data);
        window.location.reload();
      }, err => {
        alert(err.error);
      });
    } else {
      alert("Por favor diligencie el formulario adecuadamente y en su totalidad");
    }
  }

  validacion(user: any) {
    if (user.nombre === ' ' || user.nombre === undefined) {
      return false;
    } else if (user.rol === undefined) {
      return false;
    } else if (user.activo === undefined) {
      return false;
    } else {
      return true;
    }
  }

}