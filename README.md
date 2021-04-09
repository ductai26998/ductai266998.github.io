# ductai26998.github.io
#js_buoi_3:
+ Arrow function: là hàm rút gon của hàm truyền thống, nhưng không thể sử dụng thay thế cho hàm truyền thống trong mọi trường hợp
  - vd: func = () => return "Hello";
        func = (name) => return "Hello" + name;
        func = name => return "hello" + name; // nếu trong trường hợp hàm chỉ có 1 biến có thể bỏ đi dấu ngoặc đơn
        func = (name1, name2) => return "hello" + name1 + name2;
  - this trong arrow function là context của hàm gần nhất, không phải của arrow function đó.
  - thís lấy context của hàm gần nhất chứa nó.
  
+ Try catch, Exception handlling:
  - try cho phép chúng ta viết các câu lệnh thực thi trong đó
  - catch dùng để bắt các lỗi xảy ra trong quá trình thực thi lệnh trong try{}
  - throw sẽ tạo ra 1 exception theo cách chúng ta tự định nghĩa, các câu lệnh phía ssau sẽ không chạy và sẽ gọi đến hàm catch đầu tiên được
    tìm thấy, nếu không có catch thì chương trình sẽ dừng.
  - finally luôn được thực hiện dù co câu lệnh trong try{} có lỗi hay không
+ Ajax, jQuery
+ Scope, Class
+ Phân biệt var, let, const
