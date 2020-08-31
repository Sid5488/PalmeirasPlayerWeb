import { Component, OnInit } from '@angular/core';

import { PlayerService } from 'src/app/shared/services/player.service';
import { PlayersPalmeiras } from 'src/app/shared/models/playersPalmeiras.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: PlayersPalmeiras[];
  public playerForm: FormGroup;
  loading: boolean = false;

  player: PlayersPalmeiras;
  key: number;

  constructor(
    private fb: FormBuilder,
    private rest: PlayerService,
    public playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.playerForm = this.fb.group({
      name: ['', [Validators.required]],
      playingPosition: ['', [Validators.required]],
      shirtNumber: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });

    this.getPlayers();
  }

  createPlayer() {
    this.rest.postPlayer(this.playerForm.value)
      .subscribe(result => {});

    this.playerForm.reset();
    window.location.reload();
  }

  getPlayers() {
    this.playerService.getAll().subscribe(data => {
      this.players = data;

      setInterval(() => {
        this.loading = true;
      }, 3000);
    });
  }

}
