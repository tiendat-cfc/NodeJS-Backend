//file sử dụng Server Side Rendering, viết các method, chức năng
const express = require('express') //commonjs
const { getHomepage, getABC, getDat } = require('../controllers/homeController')
//bên kia export {} thì bên này cũng sẽ import {}
const router = express.Router()

//route.method('/route', handle): handle hàm để tham chiếu sang hàm ở Controller

//Khai báo, định nghĩa Route (trách nhiệm của từng thằng)
router.get('/', getHomepage)
router.get('/abc', getABC)

//Tạo view động
router.get('/dat', getDat)

module.exports = router;  
//export default: mặc định xuất 1 biến duy nhất