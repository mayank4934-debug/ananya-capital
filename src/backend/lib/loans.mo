import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Debug "mo:core/Debug";
import Types "../types/loans";
import CommonTypes "../types/common";

/// Domain logic for loan applications, meeting requests, CIBIL checks, and monthly reports
module {
  public type LoanApplication = Types.LoanApplication;
  public type LoanApplicationInput = Types.LoanApplicationInput;
  public type MeetingRequest = Types.MeetingRequest;
  public type MeetingRequestInput = Types.MeetingRequestInput;
  public type CibilCheck = Types.CibilCheck;
  public type CibilCheckInput = Types.CibilCheckInput;
  public type MonthlyReport = Types.MonthlyReport;
  public type MonthlyReportInput = Types.MonthlyReportInput;

  type DateParts = { yearMonth : Text };

  func pad2(n : Nat) : Text {
    if (n < 10) { "0" # Nat.toText(n) } else { Nat.toText(n) };
  };

  func dateFromTimestamp(ts : Int) : DateParts {
    let seconds = ts / 1_000_000_000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    var year : Nat = 1970;
    var remainingDays : Int = days;
    label yearLoop loop {
      let isLeap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0);
      let yearDays : Int = if (isLeap) 366 else 365;
      if (remainingDays < yearDays) {
        break yearLoop;
      };
      remainingDays -= yearDays;
      year += 1;
    };
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var month : Nat = 0;
    label monthLoop loop {
      let isLeap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0);
      let md = if (month == 1 and isLeap) 29 else monthDays[month];
      if (remainingDays < md) {
        break monthLoop;
      };
      remainingDays -= md;
      month += 1;
    };
    { yearMonth = Nat.toText(year) # "-" # pad2(month + 1) };
  };

  public func submitLoanApplication(
    applications : Map.Map<Text, LoanApplication>,
    input : LoanApplicationInput,
  ) : Text {
    let id = "LA-" # Int.toText(Time.now()) # "-" # Nat.toText(applications.size());
    let app : LoanApplication = {
      id;
      name = input.name;
      email = input.email;
      phone = input.phone;
      loanType = input.loanType;
      loanAmount = input.loanAmount;
      employmentType = input.employmentType;
      monthlyIncome = input.monthlyIncome;
      existingEMI = input.existingEMI;
      propertyValue = input.propertyValue;
      panNumber = input.panNumber;
      city = input.city;
      message = input.message;
      submittedAt = Time.now();
    };
    applications.add(id, app);
    id;
  };

  public func submitMeetingRequest(
    requests : Map.Map<Text, MeetingRequest>,
    input : MeetingRequestInput,
  ) : Text {
    let id = "MR-" # Int.toText(Time.now()) # "-" # Nat.toText(requests.size());
    let req : MeetingRequest = {
      id;
      name = input.name;
      email = input.email;
      phone = input.phone;
      preferredDate = input.preferredDate;
      preferredTime = input.preferredTime;
      topic = input.topic;
      message = input.message;
      submittedAt = Time.now();
    };
    requests.add(id, req);
    id;
  };

  public func saveCibilCheck(
    checks : Map.Map<Text, CibilCheck>,
    input : CibilCheckInput,
  ) : Text {
    let id = "CC-" # Int.toText(Time.now()) # "-" # Nat.toText(checks.size());
    let check : CibilCheck = {
      id;
      sessionId = input.sessionId;
      estimatedScore = input.estimatedScore;
      scoreRange = input.scoreRange;
      factors = input.factors;
      completedAt = Time.now();
    };
    checks.add(id, check);
    id;
  };

  /// Generate or retrieve a monthly report aggregating all submissions for the given yearMonth.
  /// If a report already exists, returns the existing one; otherwise creates a new report.
  public func generateMonthlyReport(
    reports : Map.Map<Text, MonthlyReport>,
    applications : Map.Map<Text, LoanApplication>,
    requests : Map.Map<Text, MeetingRequest>,
    input : MonthlyReportInput,
  ) : MonthlyReport {
    let yearMonth = input.yearMonth;
    switch (reports.get(yearMonth)) {
      case (?existing) { return existing };
      case (null) {};
    };

    let appsForMonth = Iter.toArray(Iter.filter(applications.entries(),
      func((_id, app)) {
        let date = dateFromTimestamp(app.submittedAt);
        date.yearMonth == yearMonth;
      }
    )).map(func((_id, app)) { app });

    let reqsForMonth = Iter.toArray(Iter.filter(requests.entries(),
      func((_id, req)) {
        let date = dateFromTimestamp(req.submittedAt);
        date.yearMonth == yearMonth;
      }
    )).map(func((_id, req)) { req });

    let report : MonthlyReport = {
      id = "RPT-" # yearMonth;
      yearMonth;
      loanApplications = appsForMonth;
      meetingRequests = reqsForMonth;
      generatedAt = Time.now();
      excelLink = null;
    };
    reports.add(yearMonth, report);
    report;
  };

  /// Return all monthly reports, newest first.
  public func getMonthlyReports(
    reports : Map.Map<Text, MonthlyReport>,
  ) : [MonthlyReport] {
    let arr = Iter.toArray(reports.entries()).map(func((_id, r)) { r });
    let sorted = Array.sort(arr, func(a, b) { Text.compare(b.yearMonth, a.yearMonth) });
    sorted;
  };
}
