<?php
?>
<!-- <div class="containerfull">
        <div class="bgbanner">ĐĂNG NHẬP</div>
    </div> -->

    <section class="containerfull">
        <div class="container">
            <div class="boxright">
                <h1>Thêm Sản Phẩm</h1><br>
                <div class="containerfull mr30">
                  <h2 style="color:red">
                  <!-- <?php
                           if(isset($_SESSION['tb_dangnhap'])&&($_SESSION['tb_dangnhap']!="")){
                              echo $_SESSION['tb_dangnhap'];
                              unset($_SESSION['tb_dangnhap']);
                           } 
                           
                  ?> -->
                  </h2>
                <form action="index.php?pg=sanphaminsert" method="post">
                     <div class="row">
                        <div class="col-25">
                           <label for="name">Tên sản phẩm</label>
                        </div>
                        <div class="col-75">
                           <input type="text" id="name" name="name" placeholder="Nhập tên">
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-25">
                           <label for="price">Giá</label>
                        </div>
                        <div class="col-75">
                           <input type="number" id="price" name="price" placeholder="Nhập giá">
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-25">
                           <label for="view">View</label>
                        </div>
                        <div class="col-75">
                           <input type="number" id="view" name="view" placeholder="Nhập view">
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-25">
                           <label for="iddm">Danh mục</label>
                        </div>
                        <div class="col-75">
                           <select name="iddm" id="iddm">
                           <?php foreach($danhmuc_all as $dm): ?>
                              <option value="<?= $dm['id']; ?>"><?= $dm['name']; ?></option>
                              <?php endforeach; ?>
                           </select>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-25">
                           <label for="is_bestseller">Bestseller</label>
                        </div>
                        <div class="col-75">
                           <input type="checkbox" id="is_bestseller" value="1" name="is_bestseller">
                        </div>
                     </div>                     
                     
                     
                     <br>
                     <div class="row">
                        
                        <input type="submit" name="sanphaminsert" value="Thêm">
                     </div>
                     </form>
                    
                </div>
            </div>


        </div>
    </section>