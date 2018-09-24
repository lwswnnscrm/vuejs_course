$(document).ready( () => {

  $('form').submit( (e) => {

    e.preventDefault();

    $('.result-save').remove();

    $('input, select').removeClass('invalid success');

    let allFileds = $('input, select');

    let emptyFileds = '';

    let completedFileds = '';

    for (let i = 0; i < allFileds.length; i++) {

      let fieldVal = $(allFileds[i]).val();
      let fieldName = $(allFileds[i]).attr('name')

      if (fieldVal.length > 0) {
        completedFileds += `${fieldName} `;
        $(allFileds[i]).addClass('success')
      }

      else {
        emptyFileds += `${fieldName} `;
        $(allFileds[i]).addClass('invalid')
      }

    }

    $('button').before(`
      <div class="filed-wrap result-save">
        <label>Empty fields:</label>
        <p>${emptyFileds}</p>
      </div>
      <div class="filed-wrap result-save">
        <label>completed fileds:</label>
        <p>${completedFileds}</p>
      </div>
    `)

  })

})
