import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'Cryptography',
  outDir: './dist/static',
  routes: 
	[{
		route: '/home',
		type: 'json'
	},
	{
		route: '/about',
		type: 'json'
	},
	{
		route: '/history',
		type: 'json'
	},
	{
		route: '/main_problems',
		type: 'json'
	},{
		route: '/popular_cyphers',
		type: 'json'
	},
	{
		route: '/sources',
		type: 'json'
	}]
  
};