import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {

  //instance variable
  skillsList : Skill[] = [];  

  constructor() { }

  ngOnInit() {
    let skillCat1 = new Skill();
    skillCat1.category = "Language";
    skillCat1.skilList = ["Java","Angular","Big Data"];

    let skillCat2 = new Skill();
    skillCat2.category = "Database";
    skillCat2.skilList = ["MySql","Sql Server"];

    let skillCat3 = new Skill();
    skillCat3.category = "Os";
    skillCat3.skilList = ["Windows","Linux"];

    this.skillsList.push(skillCat1);
    this.skillsList.push(skillCat2);
    this.skillsList.push(skillCat3);

  }

}
