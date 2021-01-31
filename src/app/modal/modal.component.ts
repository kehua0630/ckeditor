import { Component, OnInit } from '@angular/core';
declare var CKEDITOR: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  jobDescription: any = {};

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.setCkeditor(this.jobDescription);
    });
  }

  //編輯器
  private setCkeditor($scope: any) {
    console.log($scope);
    CKEDITOR.on('dialogDefinition', function (ev) {
      console.log(ev);
      // Take the dialog name and its definition from the event data.
      var dialogName = ev.data.name;
      var dialogDefinition = ev.data.definition;

      // Check if the definition is from the dialog window you are interested in (the "Link" dialog window).
      if (dialogName == 'link') {
        // Get a reference to the "Link Info" tab.
        dialogDefinition.removeContents('target');
        dialogDefinition.removeContents('upload');
        dialogDefinition.removeContents('advanced');
      }
    });

    var editor = CKEDITOR.replace('htmlCkEditor', {
      toolbar: [
        // { name: 'document', items: [  'Preview' ] },
        {
          name: 'clipboard',
          items: [
            'Cut',
            'Copy',
            'Paste',
            'PasteText',
            'PasteFromWord',
            '-',
            'Undo',
            'Redo',
          ],
        },
        { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll'] },
        {
          name: 'basicstyles',
          items: [
            'Bold',
            'Italic',
            'Underline',
            'Strike',
            'Subscript',
            'Superscript',
            '-',
            'CopyFormatting',
            'RemoveFormat',
          ],
        },
        {
          name: 'paragraph',
          items: [
            'NumberedList',
            'BulletedList',
            '-',
            'JustifyLeft',
            'JustifyCenter',
            'JustifyRight',
            'JustifyBlock',
          ],
        },
        { name: 'links', items: ['Link', 'Unlink'] },
        // { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar'] },
        { name: 'styles', items: ['Format', 'Font', 'FontSize'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] },
        // { name: 'tools', items: ['Maximize'] }
      ],

      // extraPlugins: 'uploadimage,image2',
      // width: 600,
      // height: 300,

      // font_sizes: '12/12px;13/13px;',
      // Upload images to a CKFinder connector (note that the response type is set to JSON).
      // uploadUrl: './impactwebconsole/api/ckeditoruploadimage',

      // Configure your file manager integration. This example uses CKFinder 3 for PHP.
      filebrowserBrowseUrl: '',
      filebrowserImageBrowseUrl: '',
      filebrowserUploadUrl: './impactwebconsole/api/ckeditoruploadimage',
      filebrowserImageUploadUrl: './impactwebconsole/api/ckeditoruploadimage',

      // The following options are not necessary and are used here for presentation uprposes only.
      // They configure the Styles drop-down list and widgets to use classes.

      stylesSet: [
        {
          name: 'Narrow image',
          type: 'widget',
          widget: 'image',
          attributes: { class: 'image-narrow' },
        },
        {
          name: 'Wide image',
          type: 'widget',
          widget: 'image',
          attributes: { class: 'image-wide' },
        },
      ],

      // Load the default contents.css file plus customizations for this sample.
      // contentsCss: [CKEDITOR.basePath + 'contents.css', 'assets/css/widgetstyles.css'],

      // Configure the Enhanced Image plugin to use classes instead of styles and to disable the
      // resizer (because image size is controlled by widget styles or the image takes maximum
      // 100% of the editor width).
      image2_alignClasses: [
        'image-align-left',
        'image-align-center',
        'image-align-right',
      ],
      image2_disableResizer: false,

      on: {
        change: function (evt) {
          const pushHtmlContent = CKEDITOR.instances['htmlCkEditor'].getData();
          $scope.TKL_RESOLUTION = pushHtmlContent;
          // console.log(pushHtmlContent, $scope, "CHANGE?");
        },
        contentDom: function () {
          // TODO: 待釐清
          const pushHtmlContent = CKEDITOR.instances['htmlCkEditor'].getData();
          $scope.TKL_RESOLUTION = pushHtmlContent;
          // console.log(pushHtmlContent, $scope, "contentDom CHANGE?");
        },
        // fileUploadRequest: function (evt) {
        //   console.log("upload start", evt);
        //   var fileLoader = evt.data.fileLoader;
        //   var formData = new FormData();
        //   var xhr = fileLoader.xhr;
        //   const url: string = environment.DEFALUT_IP + API.POST_CKEDITORUPLOADIMAGE;
        //   xhr.open(API.POST, url, false);
        //   xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem(COMMON.TOKEN));
        //   formData.append('file', fileLoader.file);
        //   fileLoader.xhr.send(formData);

        //   // Prevented the default behavior.
        //   evt.stop();
        // },
        // fileUploadResponse: function (evt) {
        //   // Prevent the default response handler.
        //   evt.stop();

        //   // Get XHR and response.
        //   try {

        //     var data = evt.data;
        //     var responseJSON = JSON.parse(data.fileLoader.xhr.response);

        //     if (responseJSON.code == 1) {
        //       data.url = responseJSON.data.image_url;
        //       console.log("upload finish:" + data.url);
        //     }
        //     else {
        //       alert(responseJSON.message);
        //     }

        //   } catch (err) {
        //     console.log(err);
        //     alert("上傳圖片發生問題,請稍後再試");
        //   }
        // },
      },
    });

    console.log(editor);
  }
}
