import { Component, OnInit } from '@angular/core';

import { PlayerService } from 'src/app/shared/services/player.service';
import { PlayersPalmeiras } from 'src/app/shared/models/playersPalmeiras.models';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: PlayersPalmeiras[];

  constructor(
    public playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getAll('').subscribe(data => {
      this.players = data.content;

      console.log(this.players);
    });
  }

}
