(function () {
 new Quill('#snow-editor', {
  bounds: '#snow-editor',
  modules: { formula: !0, toolbar: '#snow-toolbar' },
  theme: 'snow',
 }),
  new Quill('#bubble-editor', {
   modules: { toolbar: '#bubble-toolbar' },
   theme: 'bubble',
  });
 const e = [
  [{ font: [] }, { size: [] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ color: [] }, { background: [] }],
  [{ script: 'super' }, { script: 'sub' }],
  [{ header: '1' }, { header: '2' }, 'blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }],
  ['link', 'image', 'video', 'formula'],
  ['clean'],
 ];
 new Quill('#full-editor', {
  bounds: '#full-editor',
  placeholder: 'Type Something...',
  modules: { formula: !0, toolbar: e },
  theme: 'snow',
 });
})();
