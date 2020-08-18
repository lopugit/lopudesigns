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
								autoplaySpeed: (Math.random()*1000)+2000,
								autoplay: true,
								slidesToShow: 1,
								...sliderButtons
								}`
							)
							img(
								v-for="(img, index) in website.images"
								:src="'statics/img/'+website.name+'/'+img+'.png'"
							)
						q-card-title(
							).text-center.text-primary 
							//- .site-title
							//- 	| {{ website.name+website.domain }}
							//- a(
							//- 	:href="'http://'+website.name+ (website.originLink ? website.domain : '.lopudesigns.com')"
							//- 	)
							//- 	| {{ website.name+website.domain }}
							a.site-title(
								:href="'https://github.com/lopugit/'+(website.github || (website.githubPrefix || '')+website.name+(website.githubSuffix || ''))"
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
							label="Show Full Stack"
							:class=`{ 'animate-bounce': website.stackShown === false }`
							@show=`handleShow(website)`
							@hide=`handleHide(website)`
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
							.wrapper
								span(slot="subtitle").devbytext.text-primary.flex Developed by
									//- @click="$emit('openContact')"
									a(
										:href="website.authorContact"
										target="blank"
										style="font-size: 14px"
										).site-author.q-ml-xs
										| {{ website.author }}
							.wrapper.github
								a(slot="subtitle").devbytext.github-link.site-title(
									:href="'https://github.com/lopugit/'+(website.github || (website.githubPrefix || '')+website.name+(website.githubSuffix || ''))"
									)
									| View on github
									img.q-ml-xs(
										:src="'statics/img/technology/Github.png'"
									)
									q-tooltip(
										) Github

</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'

export default {
	name: 'PageIndex',
	components: {Slick},
	data(){
		return {
			sliderButtons: {
				prevArrow: "<button type='button' class='slick-prev pull-left'><i class='q-icon material-icons text-black' aria-hidden='true'>chevron_left</i></button>",
				nextArrow: "<button type='button' class='slick-next pull-right'><i class='q-icon material-icons text-black' aria-hidden='true'>chevron_right</i></button>"							
			},
			websites: [
				{
					name: 'weyoume',
					domain: '.io',
					github: 'weapp',
					images: 5,
					author: 'Nikolaj Frey',
					authorContact: "https://www.linkedin.com/in/nikolajfrey",
					originLink: true,
					mainStack: [
						'Steem',
						'Steem Connect',
						'React.js',
						'Node.js'
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'Ant Design',
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
								'React.js',
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
								'Express.js',
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
								'Github'
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
					authorContact: "https://www.linkedin.com/in/nikolajfrey",
					mainStack: [
						'MongoDB',
						'Express.js',
						'React.js',
						'Node.js',
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'Babel',
								'CSS3',
								'HTML5',
								'JS',
								'npm',
								'PostCSS',
								'React.js',
								'Sass',
								'Webpack',
							]
						},
						{
							type: 'back end',
							list: [
								'Express.js',
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
								'Github'
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
					authorContact: "https://www.linkedin.com/in/nikolajfrey",
					mainStack: [
						'Firebase Cloud Firestore',
						'Express.js',
						'Vue.js',
						'Node.js'
					],
					technologies: [
						{
							type: 'front end',
							list: [
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
								'Vue.js',
								'Vuex',
								'Webpack',
							]
						},
						{
							type: 'back end',
							list: [
								'Babel',
								'Express.js',
								'Firebase Admin Node SDK',
								'Firebase Cloud Firestore',
								'MongoDB',
								'Mongoose',
								'Nginx',
								'Node.js',
								'npm',
								'PM2',
								'Quasar',
								'Redis',
								'Socket.io',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'Github'
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
					authorContact: "https://www.linkedin.com/in/nikolajfrey",
					mainStack: [
						'MongoDB',
						'Express.js',
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
								'Express.js',
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
								'Github'
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
					authorContact: "https://www.linkedin.com/in/nikolajfrey",
					mainStack: [
						'MongoDB',
						'Express.js',
						'Vue.js',
						'Node.js'
					],
					technologies: [
						{
							type: 'front end',
							list: [
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
								'Vue.js',
								'Vuex',
								'Webpack',
							]
						},
						{
							type: 'back end',
							list: [
								'Babel',
								'Express.js',
								'Firebase Admin Node SDK',
								'Firebase Cloud Firestore',
								'MongoDB',
								'Mongoose',
								'Nginx',
								'Node.js',
								'npm',
								'PM2',
								'Quasar',
								'Redis',
								'Socket.io',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'Github'
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
					authorContact: "https://www.linkedin.com/in/nikolajfrey",
					mainStack: [
						'MongoDB',
						'Express.js',
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
								'Bootstrap',
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
								'Express.js',
								'MongoDB',
								'Mongoose',
								'Node.js',
								'npm',
								'PM2',
								'Pug SSR',
								'Redis',
								'Shopify Node SDK',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'Github'
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
					name: 'lopudesigns',
					domain: '.com',
					images: 5,
					author: 'Nikolaj Frey',
					authorContact: "https://www.linkedin.com/in/nikolajfrey",
					mainStack: [
						'Express.js',
						'Quasar',
						'Vue.js',
						'Node.js'
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'Axios',
								'Babel',
								'Google Material Icons',
								'HTML5',
								'JS',
								'CSS3',
								'npm',
								'PostCSS',
								'Quasar',
								'Sass',
								'Socket.io',
								'Stylus',
								'Vue Router',
								'Vue.js',
								'Vuex',
								'Webpack',
							]
						},
						{
							type: 'back end',
							list: [
								'Quasar',
								'Express.js',
								'Nginx',
								'npm',
								'PM2',
							]
						},
						{
							type: 'version control',
							list: [
								'Git',
								'Github'
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
					name: 'danceforovariancancer',
					domain: '.com.au',
					images: 12,
					author: 'Nikolaj Frey',
					authorContact: "https://www.linkedin.com/in/nikolajfrey",
					mainStack: [
						'MySQL',
						'Nginx',
						'Bootstrap',
						'PHP',
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'PHP',
								'Bootstrap',
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
								'Github'
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
					authorContact: "https://www.linkedin.com/in/nikolajfrey",
					mainStack: [
						'MySQL',
						'Nginx',
						'Wordpress',
						'PHP',
					],
					technologies: [
						{
							type: 'front end',
							list: [
								'PHP',
								'Wordpress',
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
								'Github'
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
		this.websites.forEach(website=>{
			this.$set(website, 'stackShown', true)
			setTimeout(()=>{
				this.$set(website, 'stackShown', false)
			}, Math.random()*3000)
		})

	},
	methods: {
		moveSlider(slider, to){
			console.log(this.$refs)
			console.log({slider, to})
			this.$refs[slider][0].goTo(to-1)
		},
		handleShow(website){
			this.$set(website, 'stackShown', true)
		},
		handleHide(website){
			this.$set(website, 'stackShown', false)
		},
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
	margin: 20px
	// padding-bottom: 15px
.slick-slider
	max-width: 100%
	position: relative
	display: block
	.slick-slide
		&>div
			max-height: 250px
	img
		width 100% !important
		height auto !important
		max-width 100%
	.slick-arrow
		position: absolute
		z-index: 1000
		background: none
		border: 0px
		font-size: 26px
		top: 85%
		opacity: .1
		outline: 0 !important
		animate: all 300ms ease
		&:hover
			opacity: .8
		&.slick-next
			right: 0
		&.slick-prev
			left: 0
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
.technology
	padding: 18px
	img
		// height: 15px
		// min-height: 10px
		max-height: 20px
		// width: 140px
		max-width: 60px
.technologies
	display: flex
	// align-items: flex-start
	justify-content: center
	flex-direction: row
	flex-wrap: wrap
	padding-top: 10px
	padding-bottom: 5px
	align-items: center
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
	width: 100%
	.wrapper
		display: inline-block
		&.github
			float: right
			margin-top: 5px
	.devbytext
		// display: inline-block
	.github-link
		// display: inline-block
		padding: 0px
		// text-align: bottom
		img
			margin-bottom: -3px
			max-height: 15px
.q-card-title
	a,
	.site-title
		display: inline-block
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
