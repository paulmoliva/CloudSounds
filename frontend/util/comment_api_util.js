
export const create_comment = function(comment_params, success) {
  $.post({
    url: '/api/comments?' + $.param(comment_params),
    success
  });
};

export const deleteComment = function(id, success) {
  $.ajax({
    type: 'DELETE',
    url: `api/comments?id=${id}`,
    success
  });
};
