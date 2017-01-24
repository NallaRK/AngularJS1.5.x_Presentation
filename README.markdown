# AngularJS1.5.x Presentation 
- Using Spectacle Boilerplate
- spectacle-code-slide

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.markdown](https://github.com/FormidableLabs/spectacle/blob/master/README.markdown).

## How to start presentation

- Run `npm start`
- Open two browser windows on two different screens
- On your screen visit [http://localhost:3000/](http://localhost:3000/). You will be redirected to a URL containing the slide id.
- Add `presenter&` immediately after the questionmark, e.g.: [http://localhost:3000/#/?presenter&_k=wbyhif](http://localhost:3000/#/?presenter&_k=wbyhif)
- On the presentation screen visit [http://localhost:3000/](http://localhost:3000/)

_Note: Any windows/tabs in the same browser that are running Spectacle will sync to one another, even if you don't want to use presentation mode_


## How to control slide

|Key Combination|Function|
|---|---|
|Right Arrow|Next Slide|
|Left Arrow|Previous Slide|
|Space|Next Slide|
|Shift+Space|Previous Slide|
|Alt/Option + O|Toggle Overview Mode|
|Alt/Option + P|Toggle Presenter Mode|

## Build & Deployment

- Building the dist version of the project is as easy as running `npm run build`
- If you want to deploy the slideshow to surge, run `npm run deploy`
