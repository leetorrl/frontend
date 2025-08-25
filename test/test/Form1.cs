using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace test
{
    public partial class Form1 : Form
    {

        private DataTable dt;
        private int count = 1;
        public Form1()
        {

            InitializeComponent();
            dt = new DataTable();
            dt.Columns.Add("메시지", typeof(string));
            dt.Columns.Add("숫자", typeof(string));

            ultraGrid1.DataSource = dt;

            button1.Click += Button1_Click;

           
    }

        private void AddRow(string message, int number) {

            DataRow row = dt.NewRow();

            row["1"] = number;
            row["당첨유무"] = message;
            
            dt.Rows.Add(row);

        }

        private void Button1_Click(object sender, EventArgs e) {

            AddRow("안녕하세요", count);
            count++;

        }
    }
}
