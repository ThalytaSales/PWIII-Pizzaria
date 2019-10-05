import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {


  formComanda : FormGroup;

  constructor(public formBuilder : FormBuilder) { }

  ngOnInit() {

      this.formComanda = this.formBuilder.group({

          inChopp : this.formBuilder.control(''),
          inPizzas : this.formBuilder.control(''),
          inRecheios : this.formBuilder.control(''),
          inPessoas : this.formBuilder.control(''), 
          inServico : this.formBuilder.control(true)
      })

  }

  onProcessar () {
    let inChopp = this.formComanda.value.inChopp;
    let inPizzas = this.formComanda.value.inPizzas;
    let inRecheios = this.formComanda.value.inRecheios;
    let inPessoas = this.formComanda.value.inPessoas;
    let inServico = this.formComanda.value.inServico;
    let consumo = inChopp*7.30 + inPizzas*31.50 + inRecheios*5.90;
    let servico = consumo / 10;
    let vtotal = consumo + servico;
    let vtotal2 = servico;
    let servico1 = 0;
    let ppesoa = vtotal / inPessoas;


    if(inServico ) {
      alert("Consumo: " +  consumo +
      "\nServiços: " + servico +
      "\nTotal :" + vtotal +
      "\nPor Pessoa :" + ppesoa );
    }
      else { 

        alert("Consumo: " +  consumo +
        "\nServiços: " + servico1 +
        "\nTotal :" + vtotal2 +
        "\nPor Pessoa :" + ppesoa );
      }
  }



}
