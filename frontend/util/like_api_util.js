export const sendLike = function(likeData, callback) {
  $.post({
    url: '/api/like?' + $.param(likeData),
    success: callback
  });
};

export const sendUnlike = function(likeData, callback) {
  $.ajax({
    type: 'DELETE',
    url: 'api/like?' + $.param(likeData),
    success: callback
  });
};
