$(document).ready(function(){
	$("#comment").click(function(){
				var name = $("#name").val();
				var comment = $("#comments").val();

				console.log(name + comment);

				var comments = localStorage.getItem("comments");
				if (!comments) {
					comments = '{"commentsList":[]}';
				}

				let commentData = {
					name : name,
					comment : comment
				}

				let commentObj = JSON.parse(comments);
				let commentArray = commentObj.commentsList;
				commentArray.push(commentData);
				let commentString = JSON.stringify(commentObj);
				localStorage.setItem('comments',commentString);

	})
	$("#commentshow").click(function(){
		/*<div class="carousel-item text-center text-muted">
			<div style="font-family: 'aa'">
				<h3>Lucy</h3>
				<p>
					Hey Guys! I am so excited.<br>Let's go together.
				</p>
			</div>
		</div>*/
		var comments = localStorage.getItem("comments");
		var text = '';
		if (comments) {
			var commentObj = JSON.parse(comments);
			var commentArray = commentObj.commentsList;
			$.each(commentArray,function(i,v){
				var name = v.name;
				var comment = v.comment;
				console.log(name+comment);
				text = text+ '<div class="carousel-item text-center text-muted">';
				text += '<div style="font-family:'+'aa'+'">';
				text += '<h3>'+name+'</h3>';
				text += '<p>'+comment+'</p>';
				text += '</div></div>';
				$("#commentshowtext").html(text);
			})
			
		}
	})
})
