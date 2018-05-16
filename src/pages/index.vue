<template lang="pug">
	.flex.flex-center.home
		.home-positioner
			.home-title.q-mt-xl
				| Portfolio
			.cards.q-mb-xl
				q-card.site-card(
					v-for="(website, index) in websites"
					:key="index"
					inline
					color="white"
					).q-ma-sm
					q-card-media
						slick(
							:ref="'slick-'+website.name"
							:options=`{
								speed: 2500,
								autoplaySpeed: Math.random()*3000,
								autoplay: true,
								slidesToShow: 1
							}`
							)
							img(
								v-for="(img, index) in website.images"
								:src="'statics/img/'+website.name+'/'+img+'.png'"
							)
						q-card-title(
							).text-center.text-primary 
							a(
								:href="'http://'+website.name+ (website.originLink ? website.domain : '.lopudesigns.com')"
								)
								| {{ website.name+website.domain }}
						q-card-main
							.technologies.center-wide
								template(
									v-for="tech in website.mainStack"
								)
									.technology
										img(
											:src="'statics/img/technology/'+tech+'.png'"
										)
										q-tooltip(
											) {{ tech }}

						q-collapsible(
							label="Full Stack"
							).text-primary
							.tech-categories-container
								.tech-categories
									template(
										v-for="category in website.technologies"
									)
										.tech-category
											.title {{ category.type }}
											.technologies
												template(
													v-for="tech in category.list"
												)
													.technology(
														:id="tech"
													)
														img(
															:alt="tech"
															:src="'statics/img/technology/'+tech+'.png'"
														)
														q-tooltip(
														) {{ tech }}

							
						.q-card-footer
							span(slot="subtitle").devbytext.text-primary.flex Developed by
								a(
									@click="$emit('openContact')"
									style="margin-left: 5px; font-size: 14px"
									).site-author
									| {{ website.author }}

</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'

export default {
	name: 'PageIndex',
	components: {Slick},
	data(){
		return {
			websites: [
				{
					name: 'ezira',
					domain: '.io',
					images: 6,
					author: 'Nikolaj Frey',
					originLink: true,
					mainStack: [
						'Steem',
						'Steem Connect',
						'React',
						'Node.js'
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'Babel',
								'CSS3',
								'Font Awesome',
								'HTML5',
								'JS',
								'Less',
								'npm',
								'PostCSS',
								'Pug SSR',
								'React Router',
								'React',
								'Redux',
								'Sass',
								'Steem Connect',
								'Webpack',
							]
						},
						{
							type: 'back end',
							list: [
								'Babel',
								'Express',
								'Nginx',
								'Node.js',
								'npm',
								'PM2',
								'Steem Connect',
								'Steem',
								'Webpack',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'GitHub'
							]
						},
						{
							type: 'sys admin',
							list: [
								'AWS',
								'EC2',
								'Route 53',
							]
						}
					]
				},
				{
					name: 'myleisure',
					domain: '.com.au',
					images: 6,
					author: 'Nikolaj Frey',
					mainStack: [
						'MongoDB',
						'Express',
						'Pug SSR',
						'Node.js'
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'Babel',
								'CSS3',
								'Font Awesome',
								'Fort Awesome',
								'Grunt',
								'HTML5',
								'jQuery',
								'JS',
								'npm',
								'PostCSS',
								'Pug SSR',
								'Sass',
								'Shopify JS SDK',
							]
						},
						{
							type: 'back end',
							list: [
								'Babel',
								'Express',
								'MongoDB',
								'Mongoose',
								'Nginx',
								'Node.js',
								'npm',
								'PM2',
								'Pug SSR',
								'Shopify Node SDK',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'GitHub'
							]
						},
						{
							type: 'sys admin',
							list: [
								'AWS',
								'EC2',
								'Route 53',
							]
						}
					]
				},
				{
					name: 'themerrier',
					domain: '.com',
					images: 8,
					author: 'Nikolaj Frey',
					mainStack: [
						'MongoDB',
						'Express',
						'React',
						'Node.js',
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'CSS3',
								'HTML5',
								'JS',
								'npm',
								'PostCSS',
								'React',
								'Sass',
								'Webpack',
							]
						},
						{
							type: 'back end',
							list: [
								'Express',
								'MongoDB',
								'Nginx',
								'Node.js',
								'npm',
								'PM2',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'GitHub'
							]
						},
						{
							type: 'sys admin',
							list: [
								'AWS',
								'EC2',
								'Route 53',
							]
						}
					]
				},
				{
					name: 'planetexpress',
					domain: '.global',
					images: 8,
					author: 'Nikolaj Frey',
					mainStack: [
						'GraphQL',
						'Express',
						'Vue',
						'Node.js'
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'Apollo',
								'Axios',
								'Babel',
								'CSS3',
								'Firebase Cloud Firestore',
								'Firebase JS SDK',
								'Google Material Icons',
								'HTML5',
								'JS',
								'npm',
								'PostCSS',
								'Quasar',
								'Sass',
								'Socket.io',
								'Stylus',
								'Vue Router',
								'Vue',
								'Vuex',
								'Webpack',
							]
						},
						{
							type: 'back end',
							list: [
								'Babel',
								'Express',
								'Firebase Admin Node SDK',
								'Firebase Cloud Firestore',
								'GraphQL',
								'MongoDB',
								'Mongoose',
								'Nginx',
								'Node.js',
								'npm',
								'Nuxt',
								'PM2',
								'Socket.io',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'GitHub'
							]
						},
						{
							type: 'sys admin',
							list: [
								'AWS',
								'EC2',
								'Route 53',
							]
						}
					]
				},
				{
					name: 'alopu',
					domain: '.com',
					images: 2,
					author: 'Nikolaj Frey',
					mainStack: [
						'GraphQL',
						'Express',
						'Vue',
						'Node.js'
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'Apollo',
								'Axios',
								'Babel',
								'CSS3',
								'Firebase Cloud Firestore',
								'Firebase JS SDK',
								'Google Material Icons',
								'HTML5',
								'JS',
								'npm',
								'PostCSS',
								'Quasar',
								'Sass',
								'Socket.io',
								'Stylus',
								'Vue Router',
								'Vue',
								'Vuex',
								'Webpack',
							]
						},
						{
							type: 'back end',
							list: [
								'Babel',
								'Express',
								'Firebase Admin Node SDK',
								'Firebase Cloud Firestore',
								'GraphQL',
								'MongoDB',
								'Mongoose',
								'Nginx',
								'Node.js',
								'npm',
								'Nuxt',
								'PM2',
								'Socket.io',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'GitHub'
							]
						},
						{
							type: 'sys admin',
							list: [
								'AWS',
								'EC2',
								'Route 53',
							]
						}
					]

				},
				{
					name: 'ozledgrowlights',
					domain: '.com.au',
					images: 10,
					author: 'Nikolaj Frey',
					mainStack: [
						'MongoDB',
						'Express',
						'Pug SSR',
						'Node.js'
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'Babel',
								'CSS3',
								'D3',
								'Font Awesome',
								'Fort Awesome',
								'Grunt',
								'HTML5',
								'jQuery',
								'JS',
								'npm',
								'PostCSS',
								'Pug SSR',
								'Sass',
								'Shopify JS SDK',
							]
						},
						{
							type: 'back end',
							list: [
								'Babel',
								'Express',
								'MongoDB',
								'Mongoose',
								'Node.js',
								'npm',
								'PM2',
								'Pug SSR',
								'Shopify Node SDK',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'GitHub'
							]
						},
						{
							type: 'sys admin',
							list: [
								'AWS',
								'EC2',
								'Nginx',
								'Route 53',
							]
						}
					]
				},
				{
					name: 'danceforovariancancer',
					domain: '.com.au',
					images: 12,
					author: 'Nikolaj Frey',
					mainStack: [
						'MySQL',
						'Nginx',
						'HTML',
						'PHP',
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'PHP',
								'PostCSS',
								'HTML5',
								'CSS3',
								'JS'
							]
						},
						{
							type: 'back end',
							list: [
								'MySQL',
								'PHP',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'GitHub'
							]
						},
						{
							type: 'sys admin',
							list: [
								'Apache',
								'AWS',
								'EC2',
								'Route 53',
							]
						}
					]

				},
				{
					name: 'estateliquidators',
					domain: '.com.au',
					images: 2,
					author: 'Nikolaj Frey',
					mainStack: [
						'MySQL',
						'Nginx',
						'HTML',
						'PHP',
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'PHP',
								'HTML5',
								'CSS3',
								'JS'
							]
						},
						{
							type: 'back end',
							list: [
								'MySQL',
								'PHP',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'GitHub'
							]
						},
						{
							type: 'sys admin',
							list: [
								'Apache',
								'AWS',
								'EC2',
								'Route 53',
							]
						}
					]
				}
			]
		}
	},
	created(){
		for(var i=0;i<this.websites.length;i++){
			// console.log('http://api.linkpreview.net/?key=5acf3522e03ea918d58be2384bacb0c9bfc0481364d1a&q='+this.websites[i].name+this.websites[i].domain)
			// this.$axios.get('http://api.linkpreview.net/?key=5acf3522e03ea918d58be2384bacb0c9bfc0481364d1a&q='+this.websites[i].name+this.websites[i].domain)
			// .then(res=>{
			//   console.log(res)
			// })
			// .catch(err=>{
			//   console.error(err)
			// })
		}
	},
	methods: {
		moveSlider(slider, to){
			console.log(this.$refs)
			console.log({slider, to})
			this.$refs[slider][0].goTo(to-1)
		}
	}
}
</script>

<style lang="stylus">
@import '~variables'
.home
	background $tertiary
	min-height 100vh
	padding-top: 80px
	align-items flex-start
	justify-content: center
	max-width: 100%
	box-sizing: border-box
	.home-positioner
		width auto
		max-width 100%
		flex-wrap wrap
		display: flex
		align-items flex-start
		justify-content: center
		flex-direction column
		.home-title
			margin: 8px
			margin-top: 35px
			font-size 1.8rem !important
			font-family adip
			color $secondary
			text-decoration none
			text-align center
			width: 100%
			max-width 100%
			box-sizing: border-box
		.cards
			width auto
			max-width 100%
			flex-wrap wrap
			display: flex
			align-items flex-start
			justify-content: center

.q-card
	width: 500px
	max-width: 100%
	// border-top-right-radius 6px
	// border-top-left-radius 6px
	overflow hidden 
	box-sizing: border-box
	border: none
.site-card
	// padding-bottom: 15px
.slick-slider
	max-width: 100%
	.slick-slide
		&>div
			max-height: 250px
	img
		width 100% !important
		height auto !important
		max-width 100%
	.slick-arrow
		display none !important
a
	color $primary
	text-decoration none
	animate(all, 300ms, ease)
	&:hover
		color darken($secondary, 0)
		text-decoration none
.site-author
	font-weight 900
	color $secondary
	cursor: pointer
	&:hover
		color darken($secondary, 4)
.tech-categories
	display: flex
	align-items: flex-start
	justify-content: flex-start
	flex-direction: column
	flex-wrap: wrap
	padding-left: 10px
	.tech-category
		text-align: center
		color: rgba(lighten($primary, 0), .4)
		width: 100%

		.title 
			font-size: 12px
			font-weight: bold
			text-transform: capitalize
			padding-top: 15px
			margin-bottom: -5px
.technologies
	display: flex
	// align-items: flex-start
	justify-content: center
	flex-direction: row
	flex-wrap: wrap
	padding-top: 10px
	padding-bottom: 5px
	align-items: center
	.technology
		padding: 18px
		img
			// height: 15px
			// min-height: 10px
			max-height: 20px
			// width: 140px
			max-width: 60px
	&.center-wide
		width: 100%
		justify-content: center
		.technology
			padding: 25px
			padding-top: 18px
			img
				max-height: 30px
				max-width: 70px
.devbytext
	color: rgba($primary, .5) !important
	font-size: 10px
	a
		color: rgba(lighten($secondary, 5), 1) !important
.q-toolbar
	max-width: 100%
	box-sizing: border-box
.q-card-footer
	padding: 16px
	padding-top: 35px
.q-card-title
	a
		font-size: 20px
		color: $secondary
.q-item-main
	.q-item-label
		// text-align: center
.q-collapsible-inner
	.q-item-division
		width: auto
		text-align: center
		justify-content: center
		padding-bottom: 30px
		.q-item-section
			flex: 0 0 auto
			width: auto
			color: $secondary
			.q-item-label
				padding: 7px 16px
				background: $secondary
				color: white
		.q-item-side
			// display none
			min-width: initial 
			color: $secondary
			// background: $secondary
			// color: white
</style>
