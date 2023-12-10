<template>
	<div class="background-img background-blur-bottom" style="overflow: hidden;">
		<div class="row overlay-container">
			<div class="col-12">
				<iframe v-if="movieSource"
					class="p-4"
					width="100%"
					height="800"
					:src="movieSource"
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
	name: 'MoviePage',
	computed: {
		movieSource() {
			let source = null;
			
			switch(this.$route.query.type) {
				case 'movie':
					source = `https://vidsrc.to/embed/movie/${this.$route.params.id}`
					break;
				case 'series':
					source = `https://vidsrc.to/embed/tv/${this.$route.params.id}`
					break;
			}

			return source;
		}
	}
}

</script>