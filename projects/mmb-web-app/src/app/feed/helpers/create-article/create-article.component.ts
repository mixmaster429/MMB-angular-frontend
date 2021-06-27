import { Component, OnInit, ViewChild } from '@angular/core';
declare var jQuery: any;
import * as MediumEditor from 'medium-editor';
import * as introJs from 'intro.js/intro.js';
import { FeedService } from '../../feed.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mmb-web-app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  editor: any;
  isLoading: boolean = true;
  introJS = introJs();

  constructor(
    private feedService: FeedService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.editor = new MediumEditor('.editable', {
      placeholder: false,
      buttonLabels: 'fontawesome',
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'quote', 'superscript',
          'anchor', 'pre', 'orderedlist', 'unorderedlist', 'indent', 'outdent', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table'],
        // static: true,
        // sticky: true
      },
      extensions: {
        'multi_placeholder': new (<any>window).MediumEditorMultiPlaceholders({
          placeholders: [
            {
              tag: 'h3',
              text: 'Headline'
            },
            {
              tag: 'p',
              text: 'Write your article here. Add images / videos or embed external links e.g. facebook, twitter, youtube, medium, linkedin...'
            }
          ]
        }),
        table: new (<any>window).MediumEditorTable()
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      jQuery('.editable').mediumInsert(
        {
          editor: this.editor
        }
      ).click();
      this.isLoading = false;
    }, 500);
  }

  /**
   * Publish the article
   */
  onPublish() {
    let content = this.editor.getContent();
    let htmlContent = new DOMParser().parseFromString(content, 'text/html');

    // find heading and paragraph inside all content items
    let h3Heading = htmlContent.querySelector('h3').innerText.trim();
    if (h3Heading === '') {
      this.toastr.error('Please enter a suitable heading to the article before proceeding', 'Error');
      return;
    }

    // check if paragraph values are provided
    let paragraphs = <any>htmlContent.querySelectorAll('p[data-placeholder]');
    let isAtleastOneParagraphFilled: boolean = false;
    for (let para of paragraphs) {
      if (para.innerText.trim() !== '') {
        isAtleastOneParagraphFilled = true;
      }
    }

    if (!isAtleastOneParagraphFilled) {
      this.toastr.error('Please enter some article body', 'Error');
      return;
    }
    
    // All good, post the article
    this.feedService.createArticle(content).subscribe((response) => {
      this.toastr.success('Published the article', 'Success');
    }, (err) => {
      this.toastr.error('Some error occurred while publishing the article', 'Error');
    })
  }

  /**
   * Starts introjs preview for how to use
   */
  showHelp() {
    this.introJS.setOptions({
      steps: [
        {
          intro: "Movemeback provides its users the ability to create rich content article"
        },
        {
          element: document.querySelector('.editable h3'),
          intro: "Enter the article headline here. The headline will be the first thing that users see, so make it meaningful and eye-catching"
        },
        {
          element: document.querySelector('.editable p.medium-editor-placeholder'),
          intro: "Enter the article body description here. You can create rich content - just type and select the text for more options"
        },
        {
          element: document.querySelector('.editable .medium-insert-buttons'),
          intro: 'Use this button to insert images or you can also embed other items like facebook, twitter, linkedin etc. Just copy-paste the link and press enter',
        },
      ]
    });

    this.introJS.start();
  }
}
