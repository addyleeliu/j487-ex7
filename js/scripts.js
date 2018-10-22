$(function() {

  console.log('scripts loaded');

  var grants;
  var html = '';
  var url = './js/NEH_Grants2010s.xml';

  var projectTitle = '';
  var yearAwarded = '';
  var originalAmount = '';
  var grantDescription = '';

  $.ajax({
    type: 'GET',
    url: url,
    data: grants,
    dataType: 'xml',
    aysnc: true,
    success: function(grants) {

      html += '<tr><th>Project Title</th><th>Year Awarded</th><th>Original Amount</th><th>Grant Description</th></tr>';

      $(grants).find('Grant').each(function(){

        projectTitle = $(this).find('ProjectTitle').text();
        yearAwarded = $(this).find('YearAwarded').text();
        originalAmount = $(this).find('OriginalAmount').text();
        grantDescription = $(this).find('ToSupport').text();

        if (grantDescription!=='None') {
          html += '<tr>';
          html +=   '<td>' + projectTitle + '</td>';
          html +=   '<td>' + yearAwarded + '</td>';
          html +=   '<td>' + originalAmount + '</td>';
          html +=   '<td>' + grantDescription + '</td>';
          html += '</tr>';
        }

      });

      $('#results').append(html);

    }
  });

});
