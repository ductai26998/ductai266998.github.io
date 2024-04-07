<?php
    session_start();
    ob_start();
    if(!isset($_SESSION["giohang"])){
        $_SESSION["giohang"]=[];
    }
    // nhúng kết nối csdl
    include "dao/pdo.php";
    include "dao/user.php";
    include "dao/danhmuc.php";
    include "dao/sanpham.php";
    include "dao/giohang.php";
    include "dao/donhang.php";

    include "view/header.php";

    //data dành cho trang chủ
    $dssp_new=get_dssp_new(4);
    $dssp_best=get_dssp_best(2);
    $dssp_view=get_dssp_view(4);


    if(!isset($_GET['pg'])){

        include "view/home.php";
    }else{
        switch ($_GET['pg']) {
            case 'sanpham':
                $dsdm=danhmuc_all();

                $kyw="";
                $titlepage="";

                if(!isset($_GET['iddm'])){
                    $iddm=0;
                }else{
                    $iddm=$_GET['iddm'];
                    $titlepage=get_name_dm($iddm);
                }

                // kiểm tra có phải form search không?
                if(isset($_POST["timkiem"])&&($_POST["timkiem"])){
                    $kyw=$_POST["kyw"];
                    $titlepage="Kết quả tìm kiếm với từ khóa: <span>".$kyw."</span>";
                }

                $dssp=get_dssp($kyw,$iddm,12);

                include "view/sanpham.php";
                break;
            case 'sanphaminsert':
                if(isset($_POST["sanphaminsert"])){
                    $name=$_POST["name"];
                    $price=$_POST["price"];
                    $view=$_POST["view"];
                    $img='sp1.webp';
                    $is_bestseller = 0;
                    if ($_POST["is_bestseller"]) {
                        $is_bestseller = 1;
                    }
                    $iddm=$_POST["iddm"];
                    $sp=array("name"=>$name,"price"=>$price,"view"=>$view,"is_bestseller"=>$is_bestseller,"iddm"=>$iddm);
                    sanpham_insert($name, $img, $price, $view, $is_bestseller, $iddm);
                    header('location: index.php?pg=sanpham');
                }
                else {
                    $danhmuc_all = danhmuc_all();
                    include "view/sanphaminsert.php";
                }
                break;
            case 'sanphamchitiet':
                $dsdm=danhmuc_all();
                if(isset($_GET["id"])&&($_GET["id"]>0)){
                    $id=$_GET["id"];
                    $iddm=get_iddm($id);
                    $dssp_lienquan=get_dssp_lienquan($iddm,$id,4);
                    $spchitiet=get_sanphamchitiet($id);
                    include "view/sanphamchitiet.php";
                }else{
                    include "view/home.php";
                }


                
                break;
            case 'addcart':
                if(isset($_POST["addcart"])){
                    $idpro=$_POST["idpro"];
                    $price=$_POST["price"];
                    $name=$_POST["name"];
                    $img=$_POST["img"];
                    $soluong=$_POST["soluong"];
                    $thanhtien=(int)$soluong * (int)$price;
                    $sp=array("idpro"=>$idpro,"price"=>$price,"name"=>$name,"img"=>$img,"soluong"=>$soluong,"thanhtien"=>$thanhtien);
                    array_push($_SESSION["giohang"],$sp);
                    // echo var_dump($_SESSION["giohang"]);
                    header('location: index.php?pg=viewcart');
                }

                // include "view/gioithieu.php";
                break;
            case 'viewcart':
                if(isset($_GET['del'])){
                    if ($_GET['del']=='all') {
                        // xoa tat ca
                        unset($_SESSION["giohang"]);
                        header('location: index.php');
                    } else {
                        // xoa 1 san pham
                        foreach ($_SESSION["giohang"] as $key => $value) {
                            if ($value["idpro"] == $_GET['del']) {
                                unset($_SESSION["giohang"][$key]);
                            }
                        }
                        header('location: /index.php?pg=viewcart');
                    }
                }else{
                    if(isset($_SESSION["giohang"])){
                        $tongdonhang=get_tongdonhang();
                    }
                        $giatrivoucher=0;
                    if(isset($_GET['voucher'])&&($_GET['voucher']==1)){
                        $tongdonhang=$_POST['tongdonhang'];
                        $mavoucher=$_POST['mavoucher'];

                        // so sanh với db để lấy giá trị về
                        $giatrivoucher=10;

                        $_SESSION['mavoucher']=$mavoucher;
                        $_SESSION['giatrivoucher']=$giatrivoucher;
                        
                    }
                    $thanhtoan=$tongdonhang - $giatrivoucher;
                    include "view/viewcart.php";
                }
                 
                break;
            case 'login':
                // input
                if(isset($_POST["dangnhap"])&&($_POST["dangnhap"])){
                    $username=$_POST["username"];
                    $password=$_POST["password"];
               
                    //xl: kiem tra
                    $kq=checkuser($username,$password);
                    if(is_array($kq)&&(count($kq))){
                        $_SESSION['s_user']=$kq;
                        header('location: index.php');
                    }else{
                        $tb="Tài khoản không tồn tại hoặc thông tin đăng nhập sai! ";
                        $_SESSION['tb_dangnhap']=$tb;
                        header('location: index.php?pg=dangnhap');
                    }


                    //out
                    
                }
                break;
                  case 'donhang':
            
                    include "view/donhang.php";
                    break;
                    case 'donhangsubmit':
                    if(isset($_POST['donhangsubmit'])){
                        $hoten=$_POST['hoten'];
                        $diachi=$_POST['diachi'];
                        $email=$_POST['email'];
                        $dienthoai=$_POST['dienthoai'];
                        $nguoinhan_ten=$_POST['hoten_nguoinhan'];
                        $nguoinhan_diachi=$_POST['diachi_nguoinhan'];
                        $nguoinhan_tel=$_POST['dienthoai_nguoinhan'];
                        $pttt=$_POST['pttt'];
                        //insert user mới
                        $username="guest".rand(1,999);
                        $password="123456";
                        $iduser=user_insert_id($username,$password,$hoten,$diachi,$email,$dienthoai);
                        //tạo đơn hàng
                        $madh="Zhope".$iduser."-".date("His-dmY");
                        $total=get_tongdonhang();
                        $ship=0;
                        if(isset($_SESSION['giatrivoucher'])){
                            $voucher=$_SESSION['giatrivoucher'];
                        }else{
                            $voucher=0;
                        }
                       
                        $tongthanhtoan=($total - $voucher) + $ship;
                        $idbill=bill_insert_id($madh, $iduser,$hoten,$email,$dienthoai,$diachi,$nguoinhan_ten,$nguoinhan_diachi,$nguoinhan_tel,$total,$voucher,$ship,$tongthanhtoan,$pttt);
                        // insert giỏ hàng từ session vào table cart
                        foreach ($_SESSION['giohang'] as $sp){
                            extract($sp);
                            cart_insert($idpro,$price,$name,$img,$soluong,$thanhtien,$idbill);
                        }

                        $_SESSION['giohang']=null;

                        include "view/donhang_configm.php"; 
                  
                    }
                    include "view/donhang_configm.php";
                    break; 
                case 'dangnhap':
                
                    include "view/dangnhap.php";
                    break;
            case 'myaccount':
                if(isset($_SESSION['s_user'])&&(count($_SESSION['s_user'])>0)){
                    
                    include "view/myaccount.php";
                }
                
                break;
            case 'logout':
                if(isset($_SESSION['s_user'])&&(count($_SESSION['s_user'])>0)){
                    unset($_SESSION['s_user']);
                }
                header('location: index.php');
                break;
            case 'adduser':
                // xác định giá trị input
                if(isset($_POST["dangky"])&&($_POST["dangky"])){
                    $username=$_POST["username"];
                    $password=$_POST["password"];
                    $email=$_POST["email"];
                    // xử lý
                    user_insert($username, $password, $email);
                }

                // 
                include "view/dangnhap.php";
                break;
            case 'updateuser':
                // xác định giá trị input
                if(isset($_POST["capnhat"])&&($_POST["capnhat"])){
                    $username=$_POST["username"];
                    $password=$_POST["password"];
                    $email=$_POST["email"];
                    $diachi=$_POST["diachi"];
                    $dienthoai=$_POST["dienthoai"];
                    $id=$_POST["id"];
                    $role=0;
                    // xử lý
                    user_update($username,$password,$email,$diachi,$dienthoai,$role,$id);
                    include "view/myaccount_confirm.php";
                }

                // 
                
                break;
            case 'dangky':
                include "view/dangky.php";
                break;
            case 'gioithieu':
                include "view/gioithieu.php";
                break;
            
            default:
                
                include "view/home.php";
                break;
        }
    }
    

    include "view/footer.php";

?>