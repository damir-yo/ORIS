package ThirdDZ;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

import static java.lang.System.out;

@WebServlet("/helo")
public class thirdSevlet extends HttpServlet{
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/html/index.html").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String email = req.getParameter("email");
        String password = req.getParameter("password");
        String message = req.getParameter("message");
        String error = "";
        if(email.isEmpty()){
            error += " error email<br>";
        }
        if(password.isEmpty()){
            error += " error password<br>";
        }
        if (message.isEmpty()){
            error += " error message";
        }

        if (!error.isEmpty()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head><title>SomeTitle</title></head>");
            out.println("<body>");
            out.println("<h1>servlet</h1>");

            out.println("<h3 style = 'color:red;'>" + error + "</h3>");

            out.println("</body></html>");

            out.println("<form method='post' action='/first'>");
            out.println("login: <input name='email' type='text' value='" + (email != null ? email : "") + "'><br>");
            out.println("password: <input name='password' type='password'><br>");
            out.println("message: <input name='message' type='text' value='" + (message != null ? message : "") + "'><br>");
            out.println("<input type='submit'>");
            out.println("</form>");
        }

        PrintWriter pw = new PrintWriter("responds.txt");
        pw.println(email);
        pw.println(password);
        pw.println(message);
        pw.println("-----");
        pw.close();
    }

}
