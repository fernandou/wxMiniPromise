const apiNamesObjectWidthParams=[
	'getSystemInfo','request','login','getUserInfo','getStorage','setStorage','removeStorage','saveImageToPhotosAlbum','getImageInfo','previewImage','canvasToTempFilePath','getSetting','authorize','openSetting','showLoading','hideLoading','showToast','showModal'
]

const wxMiniPromise = {}

const transformWXapi = (apiName)=>{
	const params = apiNamesObjectWidthParams[apiName]
	wxMiniPromise[apiName] = function(){
		let arguments1 = arguments[1]
		let data = arguments[0] || {};
		
		return new Promise(function (resolve, reject) {
			data.success = function (res) {
				resolve(res);
			}
			data.fail= function (error) {
				reject(error);
			}
			uni[apiName](data,arguments1)
		});
	}
}
apiNamesObjectWidthParams.forEach((item)=>{
	transformWXapi(item)
})
// const wmp = require('wx-mini-promise')
// up.setStorage({key:value,data:value}).then(()=>{})
module.exports =  wxMiniPromise