import { Component } from '@angular/core';

export enum TypeOp { debit, credit }


export class Operation {
	ref: number;
	date: String;
	libelle: String;
	montant: number;
	typeOp: TypeOp;
	
	constructor(ref: number, date:String, libelle: String, montant: number, typeOp: TypeOp){
		this.ref = ref;
		this.date = date;
		this.libelle = libelle;
		this.montant = montant;
		this.typeOp = typeOp;
	}
}