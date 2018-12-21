$(document).ready( () => {

  $('form').submit( (e) => {

    e.preventDefault();

    $('.result-save').remove();

    $('input, select').removeClass('invalid success');

    let allfields = $('input, select');

    let emptyfields = '';

    let completedfields = '';

    for (let i = 0; i < allfields.length; i++) {

      let fieldVal = $(allfields[i]).val();
      let fieldName = $(allfields[i]).attr('name')

      if (fieldVal.length > 0) {
        completedfields += `${fieldName} `;
        $(allfields[i]).addClass('success')
      }

      else {
        emptyfields += `${fieldName} `;
        $(allfields[i]).addClass('invalid')
      }

    }

    $('button').before(`
      <div class="filed-wrap result-save">
        <label>Empty fields:</label>
        <p>${emptyfields}</p>
      </div>
      <div class="filed-wrap result-save">
        <label>completed fields:</label>
        <p>${completedfields}</p>
      </div>
    `)

  })

})
