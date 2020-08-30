import { Component, OnInit } from '@angular/core';

import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: any[];

  constructor(
    public playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getAll().subscribe(data => {
      this.players = data;

      console.log(this.players);
    });
  }

}
