import { Component, OnInit } from '@angular/core';
import { Pagina } from 'src/app/commons/models/page.model';
import { ProfessorSimples } from '../../models/professor.model';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {
  paginaLista = {
    conteudo: [],
    paginaSelecionada: 0,
    proximaPagina: false,
    tamanhoPagina: 30
  } as Pagina<ProfessorSimples>;
  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.listarControler();
  }

  listarControler() {
    this.professorService.listarService()
      .then(result => {
        this.paginaLista = !!result ? result : {
          conteudo: [],
          paginaSelecionada: 0,
          proximaPagina: false,
          tamanhoPagina: 30
        };
      })

  }

}
