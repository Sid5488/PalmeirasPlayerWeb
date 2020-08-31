import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/shared/services/player.service';
import { ActivatedRoute, Router } from '@angular/router';

import { PlayersPalmeiras } from 'src/app/shared/models/playersPalmeiras.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  player: any;
  public playerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.playerService.getById(this.id)
      .subscribe(response => {
        this.player = {
          name: response.name,
          age: response.age,
          playingPosition: response.playingPosition,
          shirtNumber: response.shirtNumber
        }

        this.playerForm = this.fb.group({
          name: [this.player.name, [Validators.required]],
          playingPosition: [this.player.playingPosition, [Validators.required]],
          shirtNumber: [this.player.shirtNumber, [Validators.required]],
          age: [this.player.age, [Validators.required]],
        });
      });
  }

  update() {
    this.playerService.update(this.id, this.playerForm.value)
      .subscribe(response => {});

    this.playerForm.reset();
    window.location.href = '/';
  }

}
