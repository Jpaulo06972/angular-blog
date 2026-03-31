import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content implements OnInit{

  photoCover: string = "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a707480b-6d14-45d4-bca3-b4ffc87e8487/compose?aspectRatio=1.78&format=webp&width=1200"
  contentTitle: string = ""
  contentDescription: string = ""
  private id:string | null = "0"

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
      this.id = value.get("id");
      if (this.id) {
        this.setValuesToComponent(this.id);
      }
    });
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id.toString() === id)[0]

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
    }
  }
}
