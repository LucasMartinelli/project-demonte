import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class JumboService {

	emitirCateg = new EventEmitter<string>(true);
	emitirSubCateg = new EventEmitter<string>(true);

	constructor() {
		
	}

	mudarCateg(categ: string){
		this.emitirCateg.emit(categ);
	}

	mudarSubCateg(subcateg: string){
		this.emitirSubCateg.emit(subcateg);
	}

}