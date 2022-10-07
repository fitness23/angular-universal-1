import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { timer, ReplaySubject, pipe, BehaviorSubject, Observable, map, catchError, throwError, of } from 'rxjs';
import { Filter } from '../interfaces/filters-interface';
import { Item } from '../interfaces/items-interface';


@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {
    }

    getDelayApi(){
      return "https://deelay.me/1000/";
    }
    
    getApi(){
        return "https://pokeapi.co/api/v2";
    }

    getTypes(): Observable<Filter[]> {
        return this.http
          .get<Filter[]>(`${this.getApi()}/type`, { responseType: 'json' })
          .pipe(
            catchError((err: any) => {
              return this.errorHandler(err);
            }),
            map((res: any) => res.results)
          );
      }
    
      getAbilities(): Observable<Filter[]> {
        return this.http
          .get<Filter[]>(`${this.getApi()}/ability`, { responseType: 'json' })
          .pipe(
            catchError((err: any) => {
              return this.errorHandler(err);
            }),
            map((res: any) => res.results)
          );
      }
    
      getWaterPokemon(): Observable<Filter[]> {
        return this.http
            .get<Filter[]>(`${this.getApi()}/type/11`,  { responseType: 'json'})
            .pipe(
              catchError((err: any) => {
                return this.errorHandler(err);
              }),
              map((clients: any) =>
                clients.pokemon.map((client: any) => client.pokemon)
              )
            );
      }

      getFirePokemon(): Observable<Filter[]> {
        return this.http
            .get<Filter[]>(`${this.getDelayApi()}${this.getApi()}/type/10`,  { responseType: 'json' })
            .pipe(
              catchError((err: any) => {
                return this.errorHandler(err);
              }),
              map((clients: any) =>
                clients.pokemon.map((client: any) => client.pokemon)
              )
            );
      }
    
      getPokemonList(): Observable<Item[]> {
        return this.http.get<Item[]>(`${this.getApi()}/type/6/`, { responseType: 'json' }).pipe(
          catchError((err: any) => {
            return this.errorHandler(err);
          }),
          map((res: any) => res.pokemon)
        );
      }
    
      getPokemonDetail(searchUrl: string): Observable<any> {
        return this.http
          .get<Filter[]>(`${searchUrl}`, { responseType: 'json' })
          .pipe(
            catchError((err: any) => {
              return this.errorHandler(err);
            })
          );
      }
    
      errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || 'server error.');
      }

}