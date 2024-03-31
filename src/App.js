import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Tasks from "./components/Tasks";
import Prize from "./components/Prize";
import Profile from "./components/Profile";
import Team from "./components/pages/Team";
import VIP from "./components/pages/Vip";
import Reward from "./components/pages/Reward";
import PaymentPage from "./components/pages/PaymentPage";
import Login from "./auth/Login";
import VerifyOtp from "./auth/VerifyOtp";
import ConfirmBuy from "./components/pages/ConfirmBuy";
import AdminPanel from "./components/pages/AdminPanel";
import MessageAfterConfirm from "./components/pages/MessageAfterConfirm";
import SubmitUtr from "./components/pages/SubmitUtr";
import Withdraw from "./components/pages/Withdraw";
import WithdrawlMessage from "./components/pages/WithdrawlMessage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/prize" element={<Prize />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/team" element={<Team />} />
        <Route path="/vip" element={<VIP />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyOtp />} />
        <Route path="/confirm" element={<ConfirmBuy />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/message" element={<MessageAfterConfirm />} />
        <Route path="/utr" element={<SubmitUtr />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/withdrawlmessage" element={<WithdrawlMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
