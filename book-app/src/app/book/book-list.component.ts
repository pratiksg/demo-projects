import{Component, OnInit}from '@angular/core';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Book } from './book';



@Component({
    // selector:"book-list",
    templateUrl:"./book-list.component.html"

})
    export class BookListComponent implements OnInit{
        
        books: Book[];
        constructor(private bookService:BookService,
            private route:ActivatedRoute){}

        ngOnInit():void{
            this.route.paramMap.subscribe((map)=>{
                let category = map.get("category");
                console.log(category);

                this.bookService.findBooksBycategory(category).subscribe((data)=>{
                    this.books=data;
                    console.log(data);
                });
            });
            
            
        }
    
}