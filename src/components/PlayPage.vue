<template>
<div class="background-img background-blur-bottom" style="overflow: hidden;">
	<div class="row overlay-container">
		<div class="col-12">
			<iframe
			ref="gameIframe"
			class="p-4"
			width="100%"
			height="800"
			:src="gameSource"
			frameborder="0"
			allowfullscreen
			scrolling="no"
			sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
			></iframe>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'PlayPage',
	computed: {
		gameSource() {
			return `https://games.crazygames.com/en_US/${this.$route.params.id}/index.html`;
		}
	},
};
</script>
