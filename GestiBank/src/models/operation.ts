import { Component } from '@angular/core';

export enum TypeOp { debit, credit }


export class Operation {
	id: number;
	montant: number;
	date: String;
	typeOp: TypeOp;
	libelle: String;
	
	constructor(id: number, montant: number, date:String, libelle: String, typeOp: TypeOp){
		this.id = id;
		this.montant = montant;
		this.date = date;
		this.libelle = libelle;
		this.typeOp = typeOp;
	}
}