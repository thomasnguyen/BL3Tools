import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { AmaraService } from './amara.service';
import { ZaneService } from './zane.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  fl4k: Character = {
    uid: 1,
    name: 'fl4k'
  };

  Amara: Character = {
    uid: 2,
    name: 'Amara'
  };

  Zane: Character = {
    uid: 3,
    name: 'Zane'
  };

  Moze: Character = {
    uid: 4,
    name: 'Moze'
  };


  constructor(
    private amaraSvc: AmaraService,
    private zaneSvc: ZaneService,
  ) { }

  getCharacters(): Character[] {
    const Amara: Character = {
      uid: 1,
      name: 'Amara',
      fullName: 'Amara the Siren',
      avatar: 'assets/amaraAvatar.png'
    };


    const fl4k: Character = {
      uid: 2,
      name: 'fl4k'
    };

    const Moze: Character = {
      uid: 3,
      name: 'Moze'
    };

    const Zane: Character = {
      uid: 4,
      name: 'Zane',
      fullName: 'Zane the Operative',
      avatar: 'assets/amaraAvatar.png'
    };

    return [Amara, fl4k, Moze, Zane];
  }

  getCharacterByID(id: number): Character {
    const chararacters: Character[] = this.getCharacters();

    return chararacters.find(chararacter => chararacter.uid === id);
  }

  getCharacterByName(name: string): Character {
    const chararacters: Character[] = this.getCharacters();

    return chararacters.find(chararacter => chararacter.name.toLowerCase() === name.toLowerCase());
  }


  getCharMap() {
    return {
      1: this.Amara,
      2: this.fl4k,
      3: this.Moze,
      4: this.Zane,
    };
  }

  getBlankSlate(charID: number): string {
    if (charID === 1) {
      return this.amaraSvc.getBlankSlate();
    } else if (charID === 4) {
      return this.zaneSvc.getBlankSlate();
    }
  }
}
