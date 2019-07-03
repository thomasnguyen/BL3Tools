import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { AmaraService } from './amara.service';

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
  ) { }

  getCharacters(): Character[] {
    const fl4k: Character = {
      uid: 1,
      name: 'fl4k'
    };

    const Amara: Character = {
      uid: 2,
      name: 'Amara',
      fullName: 'Amara the Siren',
      avatar: 'assets/amaraAvatar.png'
    };

    const Zane: Character = {
      uid: 3,
      name: 'Zane'
    };
    const Moze: Character = {
      uid: 4,
      name: 'Moze'
    };

    return [fl4k, Amara, Zane, Moze];
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
      1: this.fl4k,
      2: this.Amara,
      3: this.Zane,
      4: this.Moze,
    };
  }

  getBlankSlate(charID: number): string {
    if (charID === 2) {
      return this.amaraSvc.getBlankSlate();
    }
  }
}
