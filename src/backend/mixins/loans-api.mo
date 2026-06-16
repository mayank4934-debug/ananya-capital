import Map "mo:core/Map";
import Time "mo:core/Time";
import Debug "mo:core/Debug";
import LoansLib "../lib/loans";
import LoanTypes "../types/loans";

/// Public API mixin for loan applications, meeting requests, CIBIL checks, and monthly reports
mixin (
  loanApplications : Map.Map<Text, LoanTypes.LoanApplication>,
  meetingRequests : Map.Map<Text, LoanTypes.MeetingRequest>,
  cibilChecks : Map.Map<Text, LoanTypes.CibilCheck>,
  monthlyReports : Map.Map<Text, LoanTypes.MonthlyReport>,
) {
  /// Submit a new loan application. Returns the generated application id.
  public shared func submitLoanApplication(app : LoanTypes.LoanApplicationInput) : async Text {
    LoansLib.submitLoanApplication(loanApplications, app);
  };

  /// Submit a new meeting request. Returns the generated request id.
  public shared func submitMeetingRequest(req : LoanTypes.MeetingRequestInput) : async Text {
    LoansLib.submitMeetingRequest(meetingRequests, req);
  };

  /// Save a CIBIL check result. Returns the generated check id.
  public shared func saveCibilCheck(check : LoanTypes.CibilCheckInput) : async Text {
    LoansLib.saveCibilCheck(cibilChecks, check);
  };

  /// Generate or retrieve a monthly report for the given yearMonth.
  public shared func generateMonthlyReport(input : LoanTypes.MonthlyReportInput) : async LoanTypes.MonthlyReport {
    LoansLib.generateMonthlyReport(monthlyReports, loanApplications, meetingRequests, input);
  };

  /// Return all monthly reports, newest first.
  public query func getMonthlyReports() : async [LoanTypes.MonthlyReport] {
    LoansLib.getMonthlyReports(monthlyReports);
  };
}
