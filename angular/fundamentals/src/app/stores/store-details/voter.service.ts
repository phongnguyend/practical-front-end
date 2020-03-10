import { Injectable } from "@angular/core";
import { IProduct } from "../index";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Constants } from 'src/app/constants';

@Injectable()
export class VoterService {
  constructor(private http: HttpClient) {}

  deleteVoter(eventId: string, session: IProduct, voterId: string) {
    const url = `${Constants.apiRoot}events/${eventId}/sessions/${session.id}/voters/${voterId}`;
    this.http.delete(url)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe(()=>{
        session.voters = session.voters.filter(voter => voter.userId !== voterId);
      });
  }

  addVoter(eventId: string, session: IProduct, voterId: string) {
    const options = { headers: new HttpHeaders({'Content-Type': '/application/json'})};
    const url = `${Constants.apiRoot}events/${eventId}/sessions/${session.id}/voters/${voterId}`;
    this.http.post(url, {}, options)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe(()=>{
        session.voters.push({userId: voterId});
      });
  }

  userHasVoted(session: IProduct, voterId: string) {
    return session.voters.some(voter => voter.userId === voterId);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}