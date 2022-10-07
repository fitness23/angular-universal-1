import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpService } from "../services/http.service";
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-welcome',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent implements OnInit {

  waterPokemon$ = this.httpService.getWaterPokemon();

  constructor(private httpService: HttpService) { }


  items$ = of([]) as Observable<any[]>;


  ngOnInit(): void {

  }


  callAjaxExample(){
    this.items$ = this.httpService.getPokemonList();
  }

}
