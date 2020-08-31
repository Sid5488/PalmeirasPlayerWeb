import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/shared/services/player.service';
import { ActivatedRoute } from '@angular/router';
import { PlayersPalmeiras } from 'src/app/shared/models/playersPalmeiras.models';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id: string;
  player: PlayersPalmeiras;
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
        this.player = response;

        this.playerForm = this.fb.group({
          name: [this.player.name, [Validators.required]],
          playingPosition: [this.player.playingPosition, [Validators.required]],
          shirtNumber: [this.player.shirtNumber, [Validators.required]],
          age: [this.player.age, [Validators.required]],
        });
      });
  }

  apagar() {
    this.playerService.delete(this.id)
      .subscribe(res => {});

    this.playerForm.reset();
    window.location.href = '/';
  }

}
