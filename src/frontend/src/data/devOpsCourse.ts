import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const devops_module0 = {
  id: "devops-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "devops-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to DevOps! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO DEVOPS!

Hey! I'm thrilled to be your companion on this DevOps journey! ⚙️ DevOps is the bridge between development and operations — it's the discipline of shipping software faster, more reliably, and at scale. You'll be the person who makes deployments smooth and systems bulletproof!

COURSE OVERVIEW
DevOps is a culture and set of practices that combines software development and IT operations. You'll master Linux and shell scripting for automation, Git and CI/CD for continuous integration and delivery, Docker and Kubernetes for containerization, Terraform and AWS for cloud infrastructure, and monitoring/security practices. DevOps engineers are in extremely high demand across all tech companies.

HOW THIS COURSE WORKS
This course has 5 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in scripting/config parts). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~35 hours
This is a practical DevOps course. Dedicate 1–2 hours per day and you'll have a solid DevOps skill set in about 4 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "devops-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this DevOps course:

1. Linux Basics — Command line, file system, processes, permissions, shell scripting
2. Git & CI/CD — Version control, branching strategies, GitHub Actions, Jenkins
3. Docker — Containers, images, Dockerfiles, Docker Compose
4. Kubernetes — Orchestration, pods, deployments, services, Helm charts
5. Cloud Platforms — AWS core services, Terraform IaC, infrastructure automation
6. Monitoring — Prometheus, Grafana, logging, alerting, DevSecOps practices
7. Projects — End-to-end CI/CD pipeline and cloud deployment projects`,
          codeExample: "",
        },
        {
          id: "devops-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Shell scripting and config file exercises in coding parts

Pure conceptual parts (like cloud architecture theory) may not have coding questions. Only parts where you write shell scripts, YAML configs, or Terraform code include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "devops-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what DevOps is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in scripting topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your DevOps journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Linux & Shell Scripting ────────────────────────────────────────

const devops_module1 = {
  id: "devops-linux",
  title: "Module 1: Linux & Shell Scripting",
  outcome:
    "Master Linux fundamentals, bash scripting, and file system permissions.",
  isLocked: false,
  parts: [
    {
      id: "devops-m1-p1",
      title: "Part 1: Linux Basics",
      description: "Core Linux commands, processes, and system navigation.",
      videoUrl: "https://www.youtube.com/watch?v=ZtqBQ68cfJc",
      notes:
        "Linux is the foundation of DevOps; mastering the command line enables automation, server management, and scripting.",
      docs: [
        {
          label: "Linux Command Reference",
          url: "https://man7.org/linux/man-pages/",
        },
        { label: "Linux Journey", url: "https://linuxjourney.com/" },
      ],
      partQuiz: [
        {
          question: "Which command lists files including hidden ones?",
          options: ["ls", "ls -a", "ls -l", "dir"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which command shows running processes?",
          options: ["proc", "ps aux", "top only", "jobs"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which command changes file permissions?",
          options: ["chown", "chmod", "chgrp", "perms"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'grep' do?",
          options: [
            "Copy files",
            "Search text patterns in files",
            "Remove files",
            "List directories",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which command displays disk usage?",
          options: ["df -h", "du only", "free", "mem"],
          correct: 0,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m1-p1-prog1",
          title: "Write a shell one-liner",
          description:
            "Write a bash one-liner that lists all .log files in /var/log, counts lines in each, and prints the filename with its line count.",
          starterCode: "#!/bin/bash\n# Write your one-liner below\n",
          hints: [
            "Use find /var/log -name '*.log' to list log files",
            "Pipe to xargs wc -l to count lines",
            "Or use a for loop: for f in /var/log/*.log; do wc -l $f; done",
          ],
          language: "bash",
        },
      ],
      subsections: [
        {
          id: "devops-m1-p1s1",
          title: "Navigation & File Operations",
          content:
            "Essential commands: pwd (current dir), cd (change dir), ls (list), cp (copy), mv (move), rm (remove), mkdir (create dir). Use man <cmd> for help.",
          codeExample:
            "# Navigate and manage files\npwd                    # print working directory\nls -la                  # list all files with details\ncd /etc                 # change to /etc\nmkdir -p projects/app   # create nested dirs\ncp file.txt backup.txt  # copy file\nmv old.txt new.txt      # rename/move file\nrm -rf temp/            # remove directory recursively\nfind . -name '*.sh'     # find shell scripts",
          video: { youtubeId: "ZtqBQ68cfJc", title: "Linux Navigation" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m1-p1s2",
          title: "Process Management",
          content:
            "ps lists processes, top shows real-time stats, kill terminates processes by PID. Use & to background jobs, fg/bg to manage them.",
          codeExample:
            "# Process management\nps aux                  # list all processes\ntop                     # real-time process monitor\nkill -9 1234            # force kill PID 1234\npkill nginx             # kill by name\njobs                    # list background jobs\nnohup ./server.sh &     # run in background, persist after logout\nwait                    # wait for background jobs to finish",
          video: { youtubeId: "ZtqBQ68cfJc", title: "Process Management" },
          flowchart: "loop",
        },
        {
          id: "devops-m1-p1s3",
          title: "Pipes, Redirection & Text Processing",
          content:
            "Pipe (|) chains commands. > redirects output to file, >> appends. grep, awk, sed, and sort are essential text processing tools.",
          codeExample:
            "# Pipes and text processing\nls -la | grep '.sh'             # list only .sh files\ncat access.log | awk '{print $1}' | sort | uniq -c  # count IPs\nsed 's/ERROR/WARN/g' app.log    # replace text\ngrep -r 'TODO' src/             # recursive search\ncat log.txt | wc -l             # count lines\necho 'hello' > out.txt          # write to file\necho 'world' >> out.txt         # append to file",
          video: { youtubeId: "ZtqBQ68cfJc", title: "Pipes & Redirection" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "devops-m1-p2",
      title: "Part 2: Bash Scripts",
      description: "Variables, conditionals, loops, and functions in bash.",
      videoUrl: "https://www.youtube.com/watch?v=v-F3YLd6oMw",
      notes:
        "Bash scripting automates repetitive tasks; mastering variables, loops, and functions is essential for DevOps automation.",
      docs: [
        {
          label: "Bash Reference Manual",
          url: "https://www.gnu.org/software/bash/manual/bash.html",
        },
        { label: "ShellCheck (linter)", url: "https://www.shellcheck.net/" },
      ],
      partQuiz: [
        {
          question: "How do you declare a variable in bash?",
          options: [
            "var = 5",
            "NAME=value",
            "let NAME = value",
            "$NAME = value",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which syntax tests if a file exists?",
          options: [
            "if file exists",
            "if [ -f file ]",
            "if exists(file)",
            "check -f file",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you loop over an array in bash?",
          options: [
            "for i in array",
            "for i in ${arr[@]}",
            "foreach arr",
            "loop arr",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does $? return?",
          options: [
            "Process ID",
            "Exit code of last command",
            "Script name",
            "Current user",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you call a function in bash?",
          options: ["call func()", "func", "invoke func", "run func()"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m1-p2-prog1",
          title: "Write a deployment script",
          description:
            "Write a bash script that accepts an environment name (dev/staging/prod) as $1, validates it, and prints 'Deploying to <env>'. Exit with code 1 if invalid.",
          starterCode: "#!/bin/bash\nENV=$1\n# Validate and deploy\n",
          hints: [
            'Use if [ -z "$ENV" ] to check if argument is empty',
            "Use case statement or if/elif to validate dev|staging|prod",
            "Use exit 1 for invalid input and echo for success",
          ],
          language: "bash",
        },
      ],
      subsections: [
        {
          id: "devops-m1-p2s1",
          title: "Variables & Input",
          content:
            "Variables store values without spaces around =. $1, $2 are positional args. Read user input with read. Use quotes to handle spaces in values.",
          codeExample:
            '#!/bin/bash\n# Variables and input\nNAME="DevOps"\nVERSION=1.0\necho "App: $NAME v$VERSION"\n\n# Positional args\necho "Script: $0, Arg1: $1"\n\n# Read input\nread -p "Enter environment: " ENV\necho "Deploying to: $ENV"\n\n# Command substitution\nDATETIME=$(date +%Y-%m-%d)\necho "Date: $DATETIME"',
          video: { youtubeId: "v-F3YLd6oMw", title: "Bash Variables" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m1-p2s2",
          title: "Conditionals & Loops",
          content:
            "if/elif/else for branching. for/while/until for loops. Use [[ ]] for safer string tests. -eq, -lt, -gt for numeric comparisons.",
          codeExample:
            "#!/bin/bash\n# Conditionals\nif [[ $1 == 'prod' ]]; then\n  echo 'Production deploy!'\nelif [[ $1 == 'dev' ]]; then\n  echo 'Dev deploy'\nelse\n  echo 'Unknown env'; exit 1\nfi\n\n# For loop\nfor env in dev staging prod; do\n  echo \"Checking $env\"\ndone\n\n# While loop\nCOUNT=0\nwhile [ $COUNT -lt 3 ]; do\n  echo \"Attempt $COUNT\"; ((COUNT++))\ndone",
          video: { youtubeId: "v-F3YLd6oMw", title: "Conditionals & Loops" },
          flowchart: "if-else",
        },
        {
          id: "devops-m1-p2s3",
          title: "Functions & Error Handling",
          content:
            "Functions group reusable logic. set -e exits on error. set -x enables debug mode. Trap signals with trap for cleanup.",
          codeExample:
            '#!/bin/bash\nset -e  # exit on any error\n\n# Function definition\ndeploy() {\n  local ENV=$1\n  echo "Deploying to $ENV..."\n  # simulate deploy\n  return 0\n}\n\n# Error handling\ntrap \'echo "Error on line $LINENO"\' ERR\n\n# Call function\ndeploy production\nEXIT_CODE=$?\nif [ $EXIT_CODE -ne 0 ]; then\n  echo "Deploy failed: $EXIT_CODE"\nfi',
          video: { youtubeId: "v-F3YLd6oMw", title: "Functions & Errors" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "devops-m1-p3",
      title: "Part 3: File System & Permissions",
      description: "Linux file hierarchy, ownership, and permission model.",
      videoUrl: "https://www.youtube.com/watch?v=LnKoncbQBqo",
      notes:
        "Linux permissions control who can read, write, and execute files; understanding chmod, chown, and sudo is critical for secure systems.",
      docs: [
        {
          label: "Linux File Permissions",
          url: "https://www.linux.org/threads/file-permissions.4389/",
        },
        { label: "chmod Calculator", url: "https://chmod-calculator.com/" },
      ],
      partQuiz: [
        {
          question: "What does chmod 755 set?",
          options: ["rwxr-xr-x", "rwxrwxrwx", "rw-r--r--", "r-xr-xr-x"],
          correct: 0,
          xp: 10,
        },
        {
          question: "Which directory stores system-wide config files?",
          options: ["/home", "/etc", "/usr", "/var"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does chown user:group file do?",
          options: [
            "Changes permissions",
            "Changes owner and group",
            "Creates a link",
            "Mounts filesystem",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is sudo used for?",
          options: [
            "Switch user",
            "Execute commands as superuser",
            "Show user info",
            "Create users",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which permission octal means read-only for all?",
          options: ["000", "111", "444", "777"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m1-p3-prog1",
          title: "Set up a secure directory",
          description:
            "Write a bash script that creates a directory 'secure_app', sets permissions to 750 (rwxr-x---), and creates an 'app.conf' file inside with read-only permissions (400).",
          starterCode: "#!/bin/bash\n# Create and secure the directory\n",
          hints: [
            "Use mkdir secure_app to create the directory",
            "Use chmod 750 secure_app to set permissions",
            "Use touch secure_app/app.conf && chmod 400 secure_app/app.conf",
          ],
          language: "bash",
        },
      ],
      subsections: [
        {
          id: "devops-m1-p3s1",
          title: "File System Hierarchy",
          content:
            "Linux FHS: /etc (config), /var (variable data/logs), /usr (programs), /home (user dirs), /tmp (temp), /proc (process info), /bin (binaries).",
          codeExample:
            "# Explore filesystem hierarchy\nls /etc          # system config files\nls /var/log      # system logs\nls /usr/bin      # user programs\nls /proc/        # virtual process filesystem\ncat /proc/cpuinfo # CPU info\ndf -h            # disk space per mount point\nmount | grep ext # show mounted filesystems\nlsblk            # list block devices",
          video: { youtubeId: "LnKoncbQBqo", title: "File System Hierarchy" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m1-p3s2",
          title: "Permissions & chmod",
          content:
            "Permissions: r(4) w(2) x(1) for owner/group/others. chmod 755 = rwxr-xr-x. Symbolic: chmod u+x adds execute for owner.",
          codeExample:
            "# Permission management\nls -la script.sh    # view permissions\nchmod +x script.sh  # make executable\nchmod 644 config.txt # rw-r--r--\nchmod 755 app/       # rwxr-xr-x\nchmod -R 750 secure/ # recursive\n\n# Ownership\nchown alice file.txt          # change owner\nchown alice:devops file.txt   # change owner+group\nchgrp devops /opt/app/        # change group only\nsudo chown -R www-data /var/www/",
          video: { youtubeId: "LnKoncbQBqo", title: "chmod & Permissions" },
          flowchart: "if-else",
        },
        {
          id: "devops-m1-p3s3",
          title: "Users, Groups & sudo",
          content:
            "useradd creates users, passwd sets passwords, usermod modifies. sudo grants root access. /etc/sudoers controls sudo rules.",
          codeExample:
            "# User and group management\nsudo useradd -m -s /bin/bash alice  # create user with home\nsudo passwd alice                     # set password\nsudo usermod -aG docker alice         # add to docker group\nsudo groupadd devops                  # create group\nid alice                              # show user info\nwho                                   # logged-in users\nsudo visudo                           # edit sudoers safely\n# In sudoers: alice ALL=(ALL) NOPASSWD: /usr/bin/docker",
          video: { youtubeId: "LnKoncbQBqo", title: "Users & sudo" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Which command recursively searches for text in files?",
      options: ["find", "grep -r", "locate", "awk"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'chmod 600 key.pem' set?",
      options: ["rwxrwxrwx", "rw-------", "r--------", "rwxr--r--"],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which bash variable holds last command exit code?",
      options: ["$!", "$?", "$$", "$0"],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which directory stores application logs in Linux?",
      options: ["/etc", "/usr", "/var/log", "/proc"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does 'set -e' do in a bash script?",
      options: [
        "Enable debug",
        "Exit on error",
        "Echo commands",
        "Enable strict mode",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "devops-m1-test1",
      title: "Automated Backup Script",
      description:
        "Write a bash script that accepts a source directory as $1, creates a timestamped tar.gz backup in /tmp, and prints success or failure message.",
      starterCode:
        "#!/bin/bash\nSRC=$1\n# Validate input, create backup, print result\n",
      hints: [
        'Check if $1 is empty with [ -z "$SRC" ] and exit 1 if so',
        "Use TIMESTAMP=$(date +%Y%m%d_%H%M%S) for filename",
        "Use tar -czf /tmp/backup_$TIMESTAMP.tar.gz $SRC and check $?",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: Version Control & CI/CD ────────────────────────────────────────

const devops_module2 = {
  id: "devops-vcs-cicd",
  title: "Module 2: Version Control & CI/CD",
  outcome: "Use Git advanced workflows, GitHub Actions, and Jenkins pipelines.",
  isLocked: true,
  parts: [
    {
      id: "devops-m2-p1",
      title: "Part 1: Git Advanced",
      description: "Branching strategies, rebasing, and merge workflows.",
      videoUrl: "https://www.youtube.com/watch?v=Uszj_k0DGsg",
      notes:
        "Advanced Git enables team collaboration through branching strategies, rebasing for clean history, and resolving merge conflicts.",
      docs: [
        {
          label: "Git Branching",
          url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",
        },
        {
          label: "Atlassian Git Tutorials",
          url: "https://www.atlassian.com/git/tutorials",
        },
      ],
      partQuiz: [
        {
          question: "What does 'git rebase' do?",
          options: [
            "Merges branches",
            "Replays commits on top of another branch",
            "Deletes branch",
            "Stashes changes",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Pull Request?",
          options: [
            "Pulling remote changes",
            "Proposing branch merge via review",
            "Cloning a repo",
            "Pushing to remote",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which branching strategy uses main, develop, and feature branches?",
          options: ["Trunk-based", "GitFlow", "Forking", "Cherry-pick"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'git stash' do?",
          options: [
            "Commits changes",
            "Temporarily saves uncommitted changes",
            "Resets HEAD",
            "Deletes files",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is 'git cherry-pick'?",
          options: [
            "Selecting files to stage",
            "Applying a specific commit to current branch",
            "Listing tags",
            "Reverting last commit",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m2-p1-prog1",
          title: "Git workflow commands",
          description:
            "Write the git commands to: create a branch 'feature/login', make a commit, push to remote, then merge back to main via rebase.",
          starterCode:
            "# Write git commands step by step\n# 1. Create and switch to feature branch\n# 2. Stage and commit changes\n# 3. Push to remote\n# 4. Rebase onto main\n# 5. Merge to main\n",
          hints: [
            "git checkout -b feature/login creates and switches to new branch",
            "git add . && git commit -m 'message' stages and commits",
            "git rebase main then git checkout main && git merge feature/login",
          ],
          language: "bash",
        },
      ],
      subsections: [
        {
          id: "devops-m2-p1s1",
          title: "Branching Strategies",
          content:
            "GitFlow: main (production), develop (integration), feature/*, hotfix/* branches. Trunk-based: short-lived branches, merge to main frequently.",
          codeExample:
            "# GitFlow branching\ngit checkout -b feature/user-auth    # create feature branch\ngit add . && git commit -m 'Add auth'\ngit checkout develop\ngit merge --no-ff feature/user-auth  # merge with history\ngit branch -d feature/user-auth      # clean up\n\n# Hotfix workflow\ngit checkout -b hotfix/security-patch main\ngit commit -m 'Fix SQL injection'\ngit checkout main && git merge hotfix/security-patch\ngit tag -a v1.0.1 -m 'Security patch'",
          video: { youtubeId: "Uszj_k0DGsg", title: "Git Branching" },
          flowchart: "if-else",
        },
        {
          id: "devops-m2-p1s2",
          title: "Rebase & Squash",
          content:
            "Rebase moves commits to new base for linear history. Interactive rebase (git rebase -i) squashes multiple commits into one clean commit.",
          codeExample:
            "# Rebase feature branch onto main\ngit checkout feature/login\ngit rebase main              # replay commits on main\n\n# Interactive rebase: squash last 3 commits\ngit rebase -i HEAD~3\n# In editor: change 'pick' to 'squash' for commits to merge\n\n# After resolving conflicts\ngit rebase --continue\n# Or abort\ngit rebase --abort\n\n# Force push after rebase (only for your own branch!)\ngit push --force-with-lease origin feature/login",
          video: { youtubeId: "Uszj_k0DGsg", title: "Git Rebase" },
          flowchart: "loop",
        },
        {
          id: "devops-m2-p1s3",
          title: "Tags, Hooks & .gitignore",
          content:
            "Tags mark release versions. Git hooks run scripts on events (pre-commit, post-merge). .gitignore prevents committing secrets and build artifacts.",
          codeExample:
            "# Tagging releases\ngit tag -a v2.0.0 -m 'Major release'\ngit push origin v2.0.0\ngit tag --list\n\n# Pre-commit hook: .git/hooks/pre-commit\n#!/bin/bash\nnpm test || exit 1  # block commit if tests fail\n\n# .gitignore best practices\necho 'node_modules/\n.env\ndist/\n*.log\n.DS_Store\ncoverage/' > .gitignore\n\ngit rm --cached .env  # untrack accidentally committed secrets",
          video: { youtubeId: "Uszj_k0DGsg", title: "Tags & Hooks" },
          flowchart: "compilation-pipeline",
        },
      ],
    },
    {
      id: "devops-m2-p2",
      title: "Part 2: GitHub Actions",
      description: "Automate CI/CD workflows with GitHub Actions YAML.",
      videoUrl: "https://www.youtube.com/watch?v=R8_veQiYBjI",
      notes:
        "GitHub Actions automates build, test, and deploy pipelines directly from your repository using YAML workflow files.",
      docs: [
        {
          label: "GitHub Actions Docs",
          url: "https://docs.github.com/en/actions",
        },
        {
          label: "Actions Marketplace",
          url: "https://github.com/marketplace?type=actions",
        },
      ],
      partQuiz: [
        {
          question: "Where are GitHub Actions workflows stored?",
          options: [".github/", ".github/workflows/", "actions/", "ci/"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What triggers a workflow with 'on: push'?",
          options: [
            "PR only",
            "Every git push",
            "Manual only",
            "Schedule only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a 'job' in GitHub Actions?",
          options: [
            "Single command",
            "Set of steps running on one runner",
            "Entire workflow",
            "Secret variable",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you use a secret in workflow?",
          options: [
            "$SECRET_NAME",
            "${{ secrets.NAME }}",
            "env.SECRET",
            "{{ secret }}",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which action checks out your repository code?",
          options: [
            "actions/setup-node",
            "actions/checkout",
            "actions/cache",
            "actions/upload-artifact",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m2-p2-prog1",
          title: "Write a CI workflow",
          description:
            "Write a GitHub Actions YAML workflow that triggers on push to main, runs on ubuntu-latest, checks out code, installs Node.js 18, runs 'npm install' and 'npm test'.",
          starterCode:
            "# .github/workflows/ci.yml\nname: CI\non:\n  # Define trigger\njobs:\n  test:\n    # Define runner and steps\n",
          hints: [
            "Use 'on: push: branches: [main]' for trigger",
            "Use 'runs-on: ubuntu-latest' and steps with actions/checkout@v3",
            "Add actions/setup-node@v3 with node-version: 18, then run npm install && npm test",
          ],
          language: "yaml",
        },
      ],
      subsections: [
        {
          id: "devops-m2-p2s1",
          title: "Workflow Structure",
          content:
            "Workflows have triggers (on:), jobs (independent units), and steps (sequential commands). Jobs run in parallel by default; use needs: for dependencies.",
          codeExample:
            "# .github/workflows/ci.yml\nname: CI Pipeline\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n      - run: npm ci\n      - run: npm test\n      - run: npm run build",
          video: { youtubeId: "R8_veQiYBjI", title: "GitHub Actions Basics" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m2-p2s2",
          title: "Secrets, Caching & Artifacts",
          content:
            "Secrets store credentials securely. Cache node_modules to speed up builds. Artifacts persist build outputs between jobs.",
          codeExample:
            "# Secrets and caching\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/cache@v3\n        with:\n          path: ~/.npm\n          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n      - run: npm ci\n      - run: npm run build\n      - uses: actions/upload-artifact@v3\n        with:\n          name: dist\n          path: dist/\n      - env:\n          API_KEY: ${{ secrets.DEPLOY_KEY }}\n        run: ./deploy.sh",
          video: { youtubeId: "R8_veQiYBjI", title: "Secrets & Caching" },
          flowchart: "loop",
        },
        {
          id: "devops-m2-p2s3",
          title: "Matrix Builds & Environments",
          content:
            "Matrix strategy runs jobs across multiple OS/Node versions in parallel. Environments add approval gates before deployment.",
          codeExample:
            "# Matrix build\njobs:\n  test:\n    runs-on: ${{ matrix.os }}\n    strategy:\n      matrix:\n        os: [ubuntu-latest, windows-latest]\n        node: [16, 18, 20]\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: ${{ matrix.node }}\n      - run: npm ci && npm test\n\n  deploy:\n    needs: test\n    environment: production   # requires approval\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo 'Deploying to prod'",
          video: { youtubeId: "R8_veQiYBjI", title: "Matrix & Environments" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "devops-m2-p3",
      title: "Part 3: Jenkins Pipelines",
      description: "Declarative Jenkinsfile, agents, and shared libraries.",
      videoUrl: "https://www.youtube.com/watch?v=6YZvp2GwT0A",
      notes:
        "Jenkins is a widely-used CI/CD server; declarative pipelines in Jenkinsfile define build, test, and deploy stages as code.",
      docs: [
        {
          label: "Jenkins Pipeline Docs",
          url: "https://www.jenkins.io/doc/book/pipeline/",
        },
        {
          label: "Jenkinsfile Syntax",
          url: "https://www.jenkins.io/doc/book/pipeline/syntax/",
        },
      ],
      partQuiz: [
        {
          question: "What is a Jenkinsfile?",
          options: [
            "Jenkins config file",
            "Pipeline-as-code definition",
            "Build artifact",
            "Plugin config",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'agent any' mean in a Jenkinsfile?",
          options: [
            "No agent",
            "Run on any available agent",
            "Docker agent only",
            "Cloud agent",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which directive defines a build stage?",
          options: [
            "steps {}",
            "stage('name') { steps {} }",
            "run {}",
            "task {}",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the 'post' block used for?",
          options: [
            "HTTP requests",
            "Actions after pipeline completes",
            "Environment setup",
            "Trigger conditions",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Jenkins 'withCredentials' do?",
          options: [
            "Creates credentials",
            "Injects secrets safely into build",
            "Removes credentials",
            "Encrypts files",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m2-p3-prog1",
          title: "Write a Jenkinsfile",
          description:
            "Write a declarative Jenkinsfile with stages: Checkout, Build (run 'npm install'), Test (run 'npm test'), and Deploy. Add a post block to notify on failure.",
          starterCode:
            "// Jenkinsfile\npipeline {\n  agent any\n  // Add stages and post block\n}\n",
          hints: [
            "Use stages { stage('name') { steps { } } } structure",
            "Use sh 'command' to run shell commands in steps",
            "Add post { failure { echo 'Build failed!' } } after stages",
          ],
          language: "groovy",
        },
      ],
      subsections: [
        {
          id: "devops-m2-p3s1",
          title: "Declarative Pipeline",
          content:
            "Declarative pipelines use a structured Jenkinsfile with pipeline { }, agent { }, stages { }, and steps { } blocks for clear, readable CI/CD definitions.",
          codeExample:
            "// Jenkinsfile - declarative pipeline\npipeline {\n  agent any\n  environment {\n    APP_NAME = 'myapp'\n    DEPLOY_ENV = 'staging'\n  }\n  stages {\n    stage('Checkout') {\n      steps { checkout scm }\n    }\n    stage('Build') {\n      steps { sh 'npm ci && npm run build' }\n    }\n    stage('Test') {\n      steps { sh 'npm test' }\n    }\n    stage('Deploy') {\n      steps { sh './deploy.sh $DEPLOY_ENV' }\n    }\n  }\n}",
          video: { youtubeId: "6YZvp2GwT0A", title: "Declarative Pipeline" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m2-p3s2",
          title: "Agents & Parallel Stages",
          content:
            "Agents define where stages run — any node, docker container, or specific label. Parallel blocks run stages simultaneously to speed up builds.",
          codeExample:
            "// Docker agent and parallel stages\npipeline {\n  agent { docker { image 'node:18-alpine' } }\n  stages {\n    stage('Tests') {\n      parallel {\n        stage('Unit Tests') {\n          steps { sh 'npm run test:unit' }\n        }\n        stage('Lint') {\n          steps { sh 'npm run lint' }\n        }\n        stage('Security Scan') {\n          agent { label 'security-scanner' }\n          steps { sh 'npm audit' }\n        }\n      }\n    }\n  }\n}",
          video: { youtubeId: "6YZvp2GwT0A", title: "Agents & Parallel" },
          flowchart: "loop",
        },
        {
          id: "devops-m2-p3s3",
          title: "Post Actions & Notifications",
          content:
            "Post block runs after stages: always (cleanup), success (notify), failure (alert). withCredentials injects secrets without exposing them in logs.",
          codeExample:
            "// Post actions with Slack notification\npipeline {\n  agent any\n  stages {\n    stage('Build') { steps { sh 'make build' } }\n  }\n  post {\n    always {\n      cleanWs()  // clean workspace\n    }\n    success {\n      echo 'Build succeeded!'\n      // slackSend color: 'good', message: 'Build passed'\n    }\n    failure {\n      echo 'Build failed!'\n      // emailext to: 'team@company.com', subject: 'Build Failed'\n    }\n  }\n}",
          video: { youtubeId: "6YZvp2GwT0A", title: "Post & Notifications" },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Which git command shows commit history as a graph?",
      options: [
        "git log",
        "git log --oneline --graph",
        "git tree",
        "git history",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What file defines a GitHub Actions workflow?",
      options: [
        "Makefile",
        ".github/workflows/*.yml",
        "Dockerfile",
        "package.json",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'needs:' do in GitHub Actions?",
      options: [
        "Requires secrets",
        "Makes job wait for another job",
        "Requires approval",
        "Sets environment",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a Jenkins shared library?",
      options: [
        "Plugin",
        "Reusable Groovy code across pipelines",
        "Docker image",
        "Agent pool",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "Which git command undoes the last commit but keeps changes staged?",
      options: [
        "git revert",
        "git reset --soft HEAD~1",
        "git stash",
        "git checkout HEAD~1",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "devops-m2-test1",
      title: "Design a CI/CD Pipeline",
      description:
        "Write a GitHub Actions workflow YAML that: triggers on push to main, runs tests on Node 18 with caching, builds a Docker image, and pushes to Docker Hub using secrets.",
      starterCode:
        "# .github/workflows/cd.yml\nname: CD\non:\n  push:\n    branches: [main]\n# Add jobs for test, build, and docker push\n",
      hints: [
        "Use actions/cache for npm with key based on package-lock.json hash",
        "Add docker/login-action with username/password from secrets",
        "Use docker build -t user/app:${{ github.sha }} . && docker push",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: Containerization ───────────────────────────────────────────────

const devops_module3 = {
  id: "devops-containers",
  title: "Module 3: Containerization",
  outcome:
    "Build Docker images, orchestrate with Compose, and deploy on Kubernetes.",
  isLocked: true,
  parts: [
    {
      id: "devops-m3-p1",
      title: "Part 1: Docker Basics",
      description: "Images, containers, Dockerfiles, and registries.",
      videoUrl: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
      notes:
        "Docker packages applications and dependencies into portable containers, ensuring consistent behavior across any environment.",
      docs: [
        { label: "Docker Docs", url: "https://docs.docker.com/" },
        { label: "Docker Hub", url: "https://hub.docker.com/" },
      ],
      partQuiz: [
        {
          question: "What is a Docker image?",
          options: [
            "Running instance",
            "Read-only template for containers",
            "Volume",
            "Network",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which Dockerfile instruction sets the base image?",
          options: ["FROM", "RUN", "ENV", "ADD"],
          correct: 0,
          xp: 10,
        },
        {
          question: "What does 'docker run -d' do?",
          options: [
            "Delete container",
            "Run in detached (background) mode",
            "Debug mode",
            "Dry run",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Docker volume used for?",
          options: [
            "Network config",
            "Persisting data outside container lifecycle",
            "CPU limits",
            "Image layers",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which command lists running containers?",
          options: ["docker images", "docker ps", "docker ls", "docker list"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m3-p1-prog1",
          title: "Write a Dockerfile",
          description:
            "Write a Dockerfile for a Node.js app: use node:18-alpine, set WORKDIR to /app, copy package*.json, run npm ci, copy source, expose port 3000, and start with 'node index.js'.",
          starterCode:
            "# Dockerfile\n# Write your Dockerfile instructions below\n",
          hints: [
            "Start with FROM node:18-alpine",
            "Use WORKDIR /app, then COPY package*.json . and RUN npm ci",
            'Then COPY . ., EXPOSE 3000, CMD ["node", "index.js"]',
          ],
          language: "dockerfile",
        },
      ],
      subsections: [
        {
          id: "devops-m3-p1s1",
          title: "Docker Architecture",
          content:
            "Docker Daemon manages containers. Client sends commands via Docker CLI. Registry (Docker Hub) stores images. Image = layers; Container = running image instance.",
          codeExample:
            "# Core Docker commands\ndocker pull nginx:alpine           # pull image\ndocker images                      # list local images\ndocker run -d -p 80:80 nginx       # run detached, map ports\ndocker ps                          # list running containers\ndocker ps -a                       # all containers\ndocker stop <id>                   # stop container\ndocker rm <id>                     # remove container\ndocker rmi nginx:alpine            # remove image\ndocker exec -it <id> /bin/sh       # shell into container",
          video: { youtubeId: "fqMOX6JJhGo", title: "Docker Architecture" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m3-p1s2",
          title: "Writing Dockerfiles",
          content:
            "Dockerfile instructions: FROM (base), RUN (build commands), COPY/ADD (files), ENV (env vars), EXPOSE (ports), CMD/ENTRYPOINT (start command). Use multi-stage builds for smaller images.",
          codeExample:
            '# Multi-stage Dockerfile for Node.js\nFROM node:18-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nRUN npm run build\n\n# Production stage\nFROM node:18-alpine\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCOPY --from=builder /app/node_modules ./node_modules\nEXPOSE 3000\nCMD ["node", "dist/index.js"]',
          video: { youtubeId: "fqMOX6JJhGo", title: "Dockerfiles" },
          flowchart: "if-else",
        },
        {
          id: "devops-m3-p1s3",
          title: "Networking & Volumes",
          content:
            "Docker networks connect containers. bridge (default), host, overlay (Swarm). Volumes persist data; bind mounts map host dirs into containers.",
          codeExample:
            "# Networking\ndocker network create app-network\ndocker run -d --name db --network app-network postgres\ndocker run -d --name api --network app-network -p 3000:3000 myapi\n\n# Volumes (persistent data)\ndocker volume create pgdata\ndocker run -d -v pgdata:/var/lib/postgresql/data postgres\n\n# Bind mount (development)\ndocker run -d \\\n  -v $(pwd)/src:/app/src \\\n  -p 3000:3000 \\\n  --name dev-server myapp:dev",
          video: { youtubeId: "fqMOX6JJhGo", title: "Networks & Volumes" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "devops-m3-p2",
      title: "Part 2: Docker Compose",
      description: "Multi-container apps with docker-compose.yml.",
      videoUrl: "https://www.youtube.com/watch?v=Qw9zlE3t8Ko",
      notes:
        "Docker Compose defines and runs multi-container applications with a single YAML file, managing services, networks, and volumes together.",
      docs: [
        {
          label: "Docker Compose Docs",
          url: "https://docs.docker.com/compose/",
        },
        {
          label: "Compose File Reference",
          url: "https://docs.docker.com/compose/compose-file/",
        },
      ],
      partQuiz: [
        {
          question: "What command starts all Compose services?",
          options: [
            "docker start",
            "docker-compose up -d",
            "docker run all",
            "compose start",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a 'service' in docker-compose.yml?",
          options: [
            "A Linux service",
            "A container definition",
            "A volume",
            "A network rule",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do Compose services communicate by default?",
          options: [
            "Via host network",
            "Via shared default network by service name",
            "Manually linked",
            "Via localhost only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'depends_on' ensure?",
          options: [
            "Service health check",
            "Service starts before another",
            "Volume mounting order",
            "Network creation",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which command rebuilds and restarts services?",
          options: [
            "docker-compose restart",
            "docker-compose up --build",
            "docker-compose reload",
            "docker-compose recreate",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m3-p2-prog1",
          title: "Write a docker-compose.yml",
          description:
            "Write a docker-compose.yml with two services: 'api' (builds from ./api, port 3000:3000) and 'db' (postgres:15, env POSTGRES_PASSWORD=secret, named volume 'pgdata:/var/lib/postgresql/data').",
          starterCode:
            "# docker-compose.yml\nversion: '3.8'\nservices:\n  # Define api and db services\n",
          hints: [
            "api: build: ./api, ports: ['3000:3000'], depends_on: [db]",
            "db: image: postgres:15, environment: POSTGRES_PASSWORD: secret",
            "Add volumes section at root level: pgdata: {} and reference it in db",
          ],
          language: "yaml",
        },
      ],
      subsections: [
        {
          id: "devops-m3-p2s1",
          title: "Compose File Structure",
          content:
            "docker-compose.yml defines services (containers), networks, and volumes. Each service specifies image/build, ports, environment, depends_on, and volumes.",
          codeExample:
            "# docker-compose.yml\nversion: '3.8'\nservices:\n  api:\n    build: ./api\n    ports:\n      - '3000:3000'\n    environment:\n      - NODE_ENV=production\n      - DB_HOST=db\n    depends_on:\n      - db\n    networks:\n      - app-net\n  db:\n    image: postgres:15-alpine\n    environment:\n      POSTGRES_DB: myapp\n      POSTGRES_USER: admin\n      POSTGRES_PASSWORD: secret\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    networks:\n      - app-net\nvolumes:\n  pgdata:\nnetworks:\n  app-net:",
          video: { youtubeId: "Qw9zlE3t8Ko", title: "Compose Structure" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m3-p2s2",
          title: "Health Checks & Overrides",
          content:
            "Healthcheck polls a command to verify service readiness. Compose override files (docker-compose.override.yml) customize settings per environment without modifying base config.",
          codeExample:
            "# Health checks\nservices:\n  api:\n    image: myapi\n    healthcheck:\n      test: ['CMD', 'curl', '-f', 'http://localhost:3000/health']\n      interval: 30s\n      timeout: 10s\n      retries: 3\n      start_period: 40s\n  db:\n    image: postgres:15\n    healthcheck:\n      test: ['CMD', 'pg_isready', '-U', 'admin']\n      interval: 10s\n      timeout: 5s\n      retries: 5",
          video: {
            youtubeId: "Qw9zlE3t8Ko",
            title: "Healthchecks & Overrides",
          },
          flowchart: "if-else",
        },
        {
          id: "devops-m3-p2s3",
          title: "Scaling & Profiles",
          content:
            "Scale services with --scale flag for horizontal scaling. Profiles enable activating optional services (e.g., dev tools) without modifying the base compose file.",
          codeExample:
            "# Scale a service\ndocker-compose up -d --scale api=3\n\n# Compose profiles for optional services\nservices:\n  api:\n    image: myapi\n  pgadmin:\n    image: dpage/pgadmin4\n    profiles: ['debug', 'dev']   # only starts with --profile dev\n    ports: ['5050:80']\n  redis:\n    image: redis:alpine\n    profiles: ['cache']\n\n# Start with profile\ndocker-compose --profile dev up -d",
          video: { youtubeId: "Qw9zlE3t8Ko", title: "Scaling & Profiles" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "devops-m3-p3",
      title: "Part 3: Kubernetes Intro",
      description: "Pods, Deployments, Services, and kubectl basics.",
      videoUrl: "https://www.youtube.com/watch?v=X48VuDVv0do",
      notes:
        "Kubernetes orchestrates containerized applications across a cluster, handling deployment, scaling, and self-healing automatically.",
      docs: [
        { label: "Kubernetes Docs", url: "https://kubernetes.io/docs/home/" },
        {
          label: "kubectl Cheat Sheet",
          url: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/",
        },
      ],
      partQuiz: [
        {
          question: "What is a Pod in Kubernetes?",
          options: [
            "Node group",
            "Smallest deployable unit (one or more containers)",
            "Service endpoint",
            "Namespace",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does a Deployment manage?",
          options: [
            "Storage",
            "ReplicaSets and pod lifecycle",
            "Network policies",
            "Secrets only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What Kubernetes object exposes pods to traffic?",
          options: ["Deployment", "ConfigMap", "Service", "Namespace"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does 'kubectl apply -f' do?",
          options: [
            "Deletes resource",
            "Creates/updates resource from YAML",
            "Applies patches",
            "Forces restart",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Namespace used for?",
          options: [
            "Container isolation",
            "Logical cluster partitioning for resources",
            "Network policy",
            "Volume binding",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m3-p3-prog1",
          title: "Write a Kubernetes Deployment",
          description:
            "Write a Kubernetes Deployment YAML for 'myapp': 3 replicas, image 'myapp:1.0', container port 3000, with a resource limit of 256Mi memory and 250m CPU.",
          starterCode:
            "# deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\n# Write spec with 3 replicas, image, port, and resource limits\n",
          hints: [
            "spec: replicas: 3, selector: matchLabels: app: myapp",
            "template.spec.containers: - name: myapp, image: myapp:1.0, ports: - containerPort: 3000",
            "Add resources: limits: memory: 256Mi, cpu: 250m under the container",
          ],
          language: "yaml",
        },
      ],
      subsections: [
        {
          id: "devops-m3-p3s1",
          title: "Pods & Deployments",
          content:
            "Pods run containers. Deployments manage ReplicaSets to maintain desired pod count, handle rolling updates, and enable rollbacks.",
          codeExample:
            "# Deployment YAML\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: api\n  template:\n    metadata:\n      labels:\n        app: api\n    spec:\n      containers:\n      - name: api\n        image: myapi:1.2\n        ports:\n        - containerPort: 3000\n---\n# kubectl commands\n# kubectl apply -f deployment.yaml\n# kubectl get pods\n# kubectl rollout status deployment/api-deployment\n# kubectl rollout undo deployment/api-deployment",
          video: { youtubeId: "X48VuDVv0do", title: "Pods & Deployments" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m3-p3s2",
          title: "Services & Ingress",
          content:
            "ClusterIP (internal), NodePort (external on node IP), LoadBalancer (cloud LB). Ingress routes HTTP traffic to services by hostname/path.",
          codeExample:
            "# Service YAML\napiVersion: v1\nkind: Service\nmetadata:\n  name: api-service\nspec:\n  selector:\n    app: api\n  ports:\n  - port: 80\n    targetPort: 3000\n  type: LoadBalancer\n---\n# Ingress (routes by path)\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: app-ingress\nspec:\n  rules:\n  - host: myapp.example.com\n    http:\n      paths:\n      - path: /api\n        pathType: Prefix\n        backend:\n          service:\n            name: api-service\n            port:\n              number: 80",
          video: { youtubeId: "X48VuDVv0do", title: "Services & Ingress" },
          flowchart: "loop",
        },
        {
          id: "devops-m3-p3s3",
          title: "ConfigMaps, Secrets & Scaling",
          content:
            "ConfigMaps store non-sensitive config; Secrets store sensitive data (base64). HPA auto-scales pods based on CPU/memory. kubectl scale for manual scaling.",
          codeExample:
            "# ConfigMap\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  APP_ENV: production\n  LOG_LEVEL: info\n---\n# Use in pod\n# envFrom:\n# - configMapRef:\n#     name: app-config\n\n# Manual scaling\n# kubectl scale deployment api-deployment --replicas=5\n\n# HPA (auto-scale when CPU > 70%)\n# kubectl autoscale deployment api-deployment --cpu-percent=70 --min=2 --max=10\n# kubectl get hpa",
          video: { youtubeId: "X48VuDVv0do", title: "ConfigMaps & Scaling" },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "What is the difference between CMD and ENTRYPOINT in Dockerfile?",
      options: [
        "No difference",
        "ENTRYPOINT is main command; CMD provides default args",
        "CMD is mandatory",
        "ENTRYPOINT runs after CMD",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'docker-compose down -v' do?",
      options: [
        "Stops services",
        "Stops services and removes volumes",
        "Restarts services",
        "Removes images only",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What Kubernetes resource handles persistent storage claims?",
      options: ["Volume", "PersistentVolumeClaim", "ConfigMap", "StatefulSet"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a multi-stage Docker build used for?",
      options: [
        "Multiple environments",
        "Reducing final image size by separating build and runtime",
        "Parallel builds",
        "Multi-arch builds",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does kubectl get pods -n monitoring do?",
      options: [
        "List all pods",
        "List pods in monitoring namespace",
        "Monitor pod health",
        "Get pod metrics",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "devops-m3-test1",
      title: "Containerize a Full Stack App",
      description:
        "Write a docker-compose.yml with api (Node.js build), db (PostgreSQL with volume), and nginx (reverse proxy) services. Include healthchecks and proper networking.",
      starterCode:
        "# docker-compose.yml\nversion: '3.8'\nservices:\n  # api, db, nginx services with healthchecks\n",
      hints: [
        "Define api with build: . , db with postgres:15 image, nginx with nginx:alpine",
        "Add healthcheck to db: test: ['CMD', 'pg_isready', '-U', 'postgres']",
        "Add depends_on with condition: service_healthy for proper startup order",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 4: Cloud & Infrastructure ─────────────────────────────────────────

const devops_module4 = {
  id: "devops-cloud-infra",
  title: "Module 4: Cloud & Infrastructure",
  outcome:
    "Deploy on AWS core services, provision with Terraform, and set up cloud monitoring.",
  isLocked: true,
  parts: [
    {
      id: "devops-m4-p1",
      title: "Part 1: AWS Core Services",
      description: "EC2, S3, RDS, IAM, and VPC fundamentals.",
      videoUrl: "https://www.youtube.com/watch?v=Z3SYDTMP3ME",
      notes:
        "AWS provides on-demand cloud infrastructure; core services EC2, S3, RDS, IAM, and VPC form the foundation of most cloud architectures.",
      docs: [
        { label: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
        {
          label: "AWS Well-Architected",
          url: "https://aws.amazon.com/architecture/well-architected/",
        },
      ],
      partQuiz: [
        {
          question: "What is EC2 used for?",
          options: [
            "Object storage",
            "Virtual servers in the cloud",
            "Database service",
            "DNS management",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is S3 primarily used for?",
          options: [
            "Compute",
            "Scalable object storage",
            "Relational database",
            "Caching",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does IAM manage?",
          options: [
            "Network routing",
            "User/role access permissions",
            "EC2 scaling",
            "S3 replication",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a VPC?",
          options: [
            "Virtual Private CPU",
            "Isolated virtual network in AWS",
            "VPN connection",
            "Container registry",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the AWS Shared Responsibility Model?",
          options: [
            "AWS manages everything",
            "AWS secures infrastructure; customer secures data/app",
            "Customer manages hardware",
            "Shared billing only",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m4-p1-prog1",
          title: "AWS CLI Commands",
          description:
            "Write AWS CLI commands to: create an S3 bucket named 'my-app-backup-2024', upload a file 'app.tar.gz' to it, and list all objects in the bucket.",
          starterCode:
            "# Write AWS CLI commands\n# 1. Create S3 bucket\n# 2. Upload file\n# 3. List objects\n",
          hints: [
            "aws s3 mb s3://my-app-backup-2024 creates the bucket",
            "aws s3 cp app.tar.gz s3://my-app-backup-2024/ uploads the file",
            "aws s3 ls s3://my-app-backup-2024/ lists objects",
          ],
          language: "bash",
        },
      ],
      subsections: [
        {
          id: "devops-m4-p1s1",
          title: "EC2 & Auto Scaling",
          content:
            "EC2 provides virtual machines. Instance types (t3, m5, c5) vary CPU/memory. Auto Scaling Groups maintain desired capacity and scale on demand.",
          codeExample:
            "# AWS CLI for EC2\naws ec2 describe-instances\n\n# Launch EC2 instance\naws ec2 run-instances \\\n  --image-id ami-0c55b159cbfafe1f0 \\\n  --instance-type t3.micro \\\n  --key-name MyKeyPair \\\n  --security-group-ids sg-12345678 \\\n  --subnet-id subnet-12345678\n\n# Auto Scaling (via console or CloudFormation)\n# Create ASG with min=2, max=5, desired=2\n# Scale policy: add 1 instance when CPU > 70%",
          video: { youtubeId: "Z3SYDTMP3ME", title: "EC2 & Auto Scaling" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m4-p1s2",
          title: "S3, RDS & Databases",
          content:
            "S3 stores objects with high durability. RDS manages relational databases (MySQL, PostgreSQL). ElastiCache provides Redis/Memcached for caching.",
          codeExample:
            "# S3 operations with AWS CLI\naws s3 mb s3://my-app-assets          # create bucket\naws s3 cp ./dist/ s3://my-app-assets/ --recursive  # upload files\naws s3 sync ./dist/ s3://my-app-assets/ --delete    # sync\naws s3 website s3://my-app-assets --index-document index.html\n\n# RDS (create via console or Terraform)\n# aws rds create-db-instance \\\n#   --db-instance-identifier mydb \\\n#   --db-instance-class db.t3.micro \\\n#   --engine postgres \\\n#   --master-username admin",
          video: { youtubeId: "Z3SYDTMP3ME", title: "S3 & RDS" },
          flowchart: "if-else",
        },
        {
          id: "devops-m4-p1s3",
          title: "IAM & VPC Security",
          content:
            "IAM follows least privilege: grant only needed permissions. VPC isolates resources; use public subnets for load balancers, private subnets for app/DB servers.",
          codeExample:
            "# IAM policy (least privilege for S3)\n# {\n#   'Version': '2012-10-17',\n#   'Statement': [{\n#     'Effect': 'Allow',\n#     'Action': ['s3:GetObject', 's3:PutObject'],\n#     'Resource': 'arn:aws:s3:::my-app-assets/*'\n#   }]\n# }\n\n# VPC CLI\naws ec2 create-vpc --cidr-block 10.0.0.0/16\naws ec2 create-subnet --vpc-id vpc-xxx --cidr-block 10.0.1.0/24\naws ec2 create-security-group --group-name web-sg --description 'Web SG'\naws ec2 authorize-security-group-ingress --group-id sg-xxx --protocol tcp --port 443 --cidr 0.0.0.0/0",
          video: { youtubeId: "Z3SYDTMP3ME", title: "IAM & VPC" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "devops-m4-p2",
      title: "Part 2: Terraform IaC",
      description:
        "Infrastructure as Code with Terraform resources and modules.",
      videoUrl: "https://www.youtube.com/watch?v=l5k1ai_GBDE",
      notes:
        "Terraform provisions cloud infrastructure through declarative HCL code, enabling version-controlled, repeatable infrastructure deployments.",
      docs: [
        {
          label: "Terraform Docs",
          url: "https://developer.hashicorp.com/terraform/docs",
        },
        { label: "Terraform Registry", url: "https://registry.terraform.io/" },
      ],
      partQuiz: [
        {
          question: "What command initializes a Terraform project?",
          options: [
            "terraform start",
            "terraform init",
            "terraform setup",
            "terraform new",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'terraform plan' do?",
          options: [
            "Applies changes",
            "Shows what will change without applying",
            "Destroys resources",
            "Formats code",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is Terraform state?",
          options: [
            "Configuration file",
            "Map of real infrastructure to config",
            "Variable file",
            "Provider version",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Terraform module?",
          options: [
            "Plugin",
            "Reusable group of resource configurations",
            "Provider",
            "State backend",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you declare a variable in Terraform?",
          options: [
            "var name = val",
            "variable 'name' { default = val }",
            "set name = val",
            "input name = val",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m4-p2-prog1",
          title: "Write a Terraform config",
          description:
            "Write a Terraform configuration that creates an AWS S3 bucket named 'tf-demo-bucket' with versioning enabled and a tag Environment=production.",
          starterCode:
            '# main.tf\nterraform {\n  required_providers {\n    aws = { source = "hashicorp/aws", version = "~> 5.0" }\n  }\n}\nprovider "aws" { region = "us-east-1" }\n# Write S3 bucket resource with versioning and tags\n',
          hints: [
            'resource "aws_s3_bucket" "demo" { bucket = "tf-demo-bucket" }',
            'Add resource "aws_s3_bucket_versioning" with status = "Enabled"',
            'Add tags = { Environment = "production" } inside the bucket resource',
          ],
          language: "hcl",
        },
      ],
      subsections: [
        {
          id: "devops-m4-p2s1",
          title: "HCL Syntax & Providers",
          content:
            "Terraform uses HCL. Providers (aws, google, azure) interface with cloud APIs. Resources define infrastructure. Data sources read existing resources.",
          codeExample:
            '# main.tf\nterraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 5.0"\n    }\n  }\n  backend "s3" {\n    bucket = "tf-state-bucket"\n    key    = "app/terraform.tfstate"\n    region = "us-east-1"\n  }\n}\nprovider "aws" {\n  region = var.aws_region\n}\n\n# Variables\nvariable "aws_region" {\n  description = "AWS region"\n  default     = "us-east-1"\n}',
          video: { youtubeId: "l5k1ai_GBDE", title: "Terraform HCL" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m4-p2s2",
          title: "Resources & State",
          content:
            "Resources map to cloud objects. terraform.tfstate tracks what Terraform manages. Remote state (S3 + DynamoDB locking) enables team collaboration.",
          codeExample:
            '# EC2 + Security Group resource\nresource "aws_security_group" "web" {\n  name        = "web-sg"\n  description = "Allow HTTP/HTTPS"\n  ingress {\n    from_port   = 443\n    to_port     = 443\n    protocol    = "tcp"\n    cidr_blocks = ["0.0.0.0/0"]\n  }\n}\nresource "aws_instance" "app" {\n  ami                    = data.aws_ami.ubuntu.id\n  instance_type          = "t3.micro"\n  vpc_security_group_ids = [aws_security_group.web.id]\n  tags = { Name = "AppServer", Env = var.environment }\n}',
          video: { youtubeId: "l5k1ai_GBDE", title: "Resources & State" },
          flowchart: "loop",
        },
        {
          id: "devops-m4-p2s3",
          title: "Modules & Workspaces",
          content:
            "Modules package reusable resource configurations. Workspaces manage multiple environments (dev/staging/prod) from the same config with different state.",
          codeExample:
            '# Using a module\nmodule "vpc" {\n  source  = "terraform-aws-modules/vpc/aws"\n  version = "5.0.0"\n  name    = "app-vpc"\n  cidr    = "10.0.0.0/16"\n  azs     = ["us-east-1a", "us-east-1b"]\n  public_subnets  = ["10.0.1.0/24", "10.0.2.0/24"]\n  private_subnets = ["10.0.3.0/24", "10.0.4.0/24"]\n}\n\n# Workspace commands\n# terraform workspace new staging\n# terraform workspace select production\n# terraform workspace list\n# Use: ${terraform.workspace} in config',
          video: { youtubeId: "l5k1ai_GBDE", title: "Modules & Workspaces" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "devops-m4-p3",
      title: "Part 3: Cloud Monitoring",
      description: "CloudWatch, Prometheus, and Grafana for observability.",
      videoUrl: "https://www.youtube.com/watch?v=9TJx7QTrTyo",
      notes:
        "Monitoring enables observability through metrics, logs, and traces; CloudWatch, Prometheus, and Grafana are the standard tools.",
      docs: [
        {
          label: "AWS CloudWatch Docs",
          url: "https://docs.aws.amazon.com/cloudwatch/",
        },
        {
          label: "Prometheus Docs",
          url: "https://prometheus.io/docs/introduction/overview/",
        },
      ],
      partQuiz: [
        {
          question: "What are the three pillars of observability?",
          options: [
            "CPU, Memory, Disk",
            "Metrics, Logs, Traces",
            "Alerts, Dashboards, Reports",
            "Dev, Stage, Prod",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Prometheus use to collect metrics?",
          options: [
            "Push model",
            "Pull/scrape model",
            "Log tailing",
            "Webhooks only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is an SLO?",
          options: [
            "Service Level Objective (target reliability)",
            "System Log Output",
            "Scalable Load Option",
            "Service Launch Order",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What is CloudWatch Alarm used for?",
          options: [
            "Display metrics",
            "Trigger actions when metric crosses threshold",
            "Store logs",
            "Create dashboards",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Grafana dashboard?",
          options: [
            "Alert manager",
            "Visual display of metrics from data sources",
            "Log storage",
            "Prometheus replacement",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m4-p3-prog1",
          title: "Write a Prometheus scrape config",
          description:
            "Write a prometheus.yml configuration that scrapes metrics from localhost:9090 (self), localhost:9100 (node-exporter), and localhost:3000 (your app) every 15 seconds.",
          starterCode:
            "# prometheus.yml\nglobal:\n  scrape_interval: 15s\nscrape_configs:\n  # Add three jobs: prometheus, node, and myapp\n",
          hints: [
            "Each job has job_name and static_configs with targets list",
            "- job_name: 'prometheus', static_configs: [{targets: ['localhost:9090']}]",
            "Repeat for node-exporter (9100) and your app (3000)",
          ],
          language: "yaml",
        },
      ],
      subsections: [
        {
          id: "devops-m4-p3s1",
          title: "CloudWatch Metrics & Logs",
          content:
            "CloudWatch collects EC2/Lambda/RDS metrics, aggregates logs via Log Groups, and triggers alarms for SNS/Auto Scaling actions.",
          codeExample:
            "# CloudWatch CLI commands\n# Get EC2 CPU metrics\naws cloudwatch get-metric-statistics \\\n  --namespace AWS/EC2 \\\n  --metric-name CPUUtilization \\\n  --dimensions Name=InstanceId,Value=i-1234567890abcdef0 \\\n  --start-time 2024-01-01T00:00:00Z \\\n  --end-time 2024-01-01T01:00:00Z \\\n  --period 300 --statistics Average\n\n# Create alarm (CPU > 80% for 5 minutes)\naws cloudwatch put-metric-alarm \\\n  --alarm-name 'HighCPU' \\\n  --metric-name CPUUtilization \\\n  --threshold 80 --comparison-operator GreaterThanThreshold \\\n  --evaluation-periods 2 --period 300",
          video: { youtubeId: "9TJx7QTrTyo", title: "CloudWatch" },
          flowchart: "if-else",
        },
        {
          id: "devops-m4-p3s2",
          title: "Prometheus & Grafana",
          content:
            "Prometheus scrapes /metrics endpoints and stores time-series data. Grafana queries Prometheus with PromQL and visualizes on dashboards.",
          codeExample:
            "# prometheus.yml configuration\nglobal:\n  scrape_interval: 15s\nscrape_configs:\n  - job_name: 'node-exporter'\n    static_configs:\n      - targets: ['node-exporter:9100']\n  - job_name: 'myapp'\n    static_configs:\n      - targets: ['api:3000']\n    metrics_path: '/metrics'\n\n# Node.js app exposing metrics\n# const client = require('prom-client');\n# const counter = new client.Counter({ name: 'http_requests_total' });\n# app.get('/metrics', (req, res) => client.register.metrics())",
          video: { youtubeId: "9TJx7QTrTyo", title: "Prometheus & Grafana" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m4-p3s3",
          title: "Alerting & SLOs",
          content:
            "Define SLOs (99.9% uptime) and SLAs with clients. Alertmanager routes Prometheus alerts to Slack/PagerDuty. Error budgets track remaining reliability margin.",
          codeExample:
            "# Prometheus alerting rule\n# alerts/rules.yml\ngroups:\n- name: app-alerts\n  rules:\n  - alert: HighErrorRate\n    expr: rate(http_requests_total{status=~'5..'}[5m]) > 0.05\n    for: 2m\n    labels:\n      severity: critical\n    annotations:\n      summary: 'Error rate > 5% for {{ $labels.instance }}'\n  - alert: ServiceDown\n    expr: up == 0\n    for: 1m\n    labels:\n      severity: page\n    annotations:\n      summary: '{{ $labels.job }} is down'",
          video: { youtubeId: "9TJx7QTrTyo", title: "Alerting & SLOs" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is Infrastructure as Code (IaC)?",
      options: [
        "Writing docs",
        "Provisioning infra via version-controlled code",
        "Manual cloud setup",
        "Scripting only",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'terraform destroy' do?",
      options: [
        "Removes state file",
        "Destroys all managed resources",
        "Validates config",
        "Resets providers",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What AWS service provides managed Kubernetes?",
      options: ["ECS", "EKS", "ECR", "Fargate"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a CloudWatch Log Group?",
      options: [
        "Metric namespace",
        "Container for log streams from one source",
        "Alarm group",
        "Dashboard",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "Which Prometheus query calculates request rate per second over 5m?",
      options: [
        "avg(requests)",
        "rate(requests_total[5m])",
        "sum(requests)",
        "increase(requests)",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "devops-m4-test1",
      title: "Provision a Web App Infrastructure",
      description:
        "Write Terraform code to provision: an EC2 instance with security group allowing ports 80 and 443, and an S3 bucket for static assets with versioning enabled.",
      starterCode:
        '# main.tf\nprovider "aws" { region = "us-east-1" }\n# Write EC2 instance, security group, and S3 bucket resources\n',
      hints: [
        "Create aws_security_group with ingress rules for ports 80 and 443 from 0.0.0.0/0",
        "Create aws_instance referencing the security group ID via vpc_security_group_ids",
        "Create aws_s3_bucket and aws_s3_bucket_versioning resources separately",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 5: DevOps Practices ───────────────────────────────────────────────

const devops_module5 = {
  id: "devops-practices",
  title: "Module 5: DevOps Practices",
  outcome:
    "Apply Agile/Scrum, SRE principles, and security practices in DevOps workflows.",
  isLocked: true,
  parts: [
    {
      id: "devops-m5-p1",
      title: "Part 1: Agile & Scrum",
      description: "Agile manifesto, Scrum ceremonies, and Kanban in DevOps.",
      videoUrl: "https://www.youtube.com/watch?v=2Vt7Ik8Ublw",
      notes:
        "Agile and Scrum provide iterative delivery frameworks that align development and operations for faster, more reliable releases.",
      docs: [
        { label: "Agile Manifesto", url: "https://agilemanifesto.org/" },
        { label: "Scrum Guide", url: "https://scrumguides.org/" },
      ],
      partQuiz: [
        {
          question: "What is a Sprint in Scrum?",
          options: [
            "Code review",
            "Time-boxed iteration (typically 2 weeks)",
            "Release cycle",
            "Daily standup",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the role of a Scrum Master?",
          options: [
            "Technical lead",
            "Facilitates Scrum and removes blockers",
            "Product owner",
            "QA lead",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a backlog refinement?",
          options: [
            "Code cleanup",
            "Review and estimate backlog items",
            "Sprint review",
            "Retrospective",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does DoD (Definition of Done) define?",
          options: [
            "Project deadline",
            "Criteria for a story to be complete",
            "Bug definition",
            "Deployment approval",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is Kanban focused on?",
          options: [
            "Fixed sprints",
            "Continuous flow with WIP limits",
            "Daily standups",
            "Release planning",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m5-p1-prog1",
          title: "Automate sprint report generation",
          description:
            "Write a bash script that reads a CSV file (columns: id,title,status,points) and prints a sprint summary: total stories, total points, completed count and points.",
          starterCode:
            "#!/bin/bash\n# sprint.csv format: id,title,status,points\n# Example: 1,Login Feature,done,5\nCSV_FILE=${1:-sprint.csv}\n# Parse and summarize sprint data\n",
          hints: [
            "Use tail -n +2 to skip header row",
            "Use awk -F',' to split CSV and accumulate totals",
            "Count lines where $3=='done' for completed stories",
          ],
          language: "bash",
        },
      ],
      subsections: [
        {
          id: "devops-m5-p1s1",
          title: "Agile Principles",
          content:
            "Agile values individuals over processes, working software over documentation, customer collaboration over contracts, and responding to change over following a plan.",
          codeExample:
            "# Agile in practice: Automated testing supports continuous delivery\n\n# Feature flags enable incremental delivery\n# config.js\nconst features = {\n  newDashboard: process.env.FEATURE_NEW_DASHBOARD === 'true',\n  betaAPI: process.env.FEATURE_BETA_API === 'true',\n};\n\n# CI pipeline supports agile: test on every commit\n# .github/workflows/ci.yml\n# on: push\n# jobs: test -> lint -> security-scan -> deploy-staging\n\n# Short feedback loops: deploy to staging on every PR\n# Deploy to prod on merge to main with approval gate",
          video: { youtubeId: "2Vt7Ik8Ublw", title: "Agile Principles" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m5-p1s2",
          title: "Scrum Ceremonies",
          content:
            "Sprint Planning: define sprint goal and select backlog items. Daily Standup: 15-min sync (yesterday/today/blockers). Sprint Review: demo to stakeholders. Retrospective: improve process.",
          codeExample:
            "# Sprint workflow in JIRA/GitHub Projects\n# Sprint structure (2 weeks):\n# Week 1: Sprint Planning → Development → Code Review\n# Week 2: QA → Bug Fixes → Sprint Review → Retrospective\n\n# Automate standup reminders\n# .github/workflows/standup.yml\n# on: schedule: cron: '0 9 * * 1-5' (9am Mon-Fri)\n# steps: post to Slack channel with previous day's merged PRs\n\n# Story points: use Fibonacci (1,2,3,5,8,13)\n# Velocity = avg story points completed per sprint",
          video: { youtubeId: "2Vt7Ik8Ublw", title: "Scrum Ceremonies" },
          flowchart: "if-else",
        },
        {
          id: "devops-m5-p1s3",
          title: "Kanban & DevOps Metrics",
          content:
            "DORA metrics measure DevOps performance: Deployment Frequency, Lead Time, MTTR, Change Failure Rate. Kanban limits WIP to prevent bottlenecks.",
          codeExample:
            "# DORA Metrics tracking script\n#!/bin/bash\n# Deployment frequency: count deploys last 30 days\ngit log --oneline --after='30 days ago' | grep 'deploy\\|release' | wc -l\n\n# Lead time: time from first commit to deploy\ngit log --format='%ad %s' --date=short | grep 'feat:' | head -5\n\n# Change failure rate: failed deploys / total deploys\nFAILED=$(grep 'rollback\\|hotfix' deploy.log | wc -l)\nTOTAL=$(wc -l < deploy.log)\necho \"Failure rate: $(echo \"scale=2; $FAILED/$TOTAL*100\" | bc)%\"",
          video: { youtubeId: "2Vt7Ik8Ublw", title: "Kanban & Metrics" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "devops-m5-p2",
      title: "Part 2: Site Reliability Engineering",
      description: "SLIs, SLOs, error budgets, and on-call practices.",
      videoUrl: "https://www.youtube.com/watch?v=CBqADllU52s",
      notes:
        "SRE applies software engineering principles to operations, using error budgets and SLOs to balance reliability with feature velocity.",
      docs: [
        {
          label: "Google SRE Book",
          url: "https://sre.google/sre-book/table-of-contents/",
        },
        {
          label: "SRE Workbook",
          url: "https://sre.google/workbook/table-of-contents/",
        },
      ],
      partQuiz: [
        {
          question: "What is an SLI?",
          options: [
            "Service Level Incident",
            "Measurable metric indicating service health",
            "Security Level Index",
            "Scheduled Load Indicator",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is an error budget?",
          options: [
            "Budget for error messages",
            "Allowed downtime derived from SLO",
            "Bug fix allocation",
            "Testing budget",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does MTTR measure?",
          options: [
            "Mean Time To Release",
            "Mean Time To Recovery",
            "Max Throughput Test Result",
            "Monthly Traffic Total Rate",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a postmortem?",
          options: [
            "Final deployment",
            "Blameless incident analysis",
            "Post-release review",
            "Final test run",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is toil in SRE?",
          options: [
            "Technical debt",
            "Manual repetitive operational work with no lasting value",
            "On-call burden",
            "Deployment effort",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m5-p2-prog1",
          title: "Calculate error budget",
          description:
            "Write a bash script that accepts SLO percentage (e.g., 99.9) and time period in days, then calculates and prints the error budget in minutes and seconds.",
          starterCode:
            "#!/bin/bash\nSLO=$1    # e.g., 99.9\nDAYS=$2   # e.g., 30\n# Calculate error budget in minutes and seconds\n",
          hints: [
            "Total minutes = DAYS * 24 * 60",
            "Error budget = total_minutes * (1 - SLO/100)",
            'Use bc for floating point: echo "scale=2; $TOTAL * (1 - $SLO/100)" | bc',
          ],
          language: "bash",
        },
      ],
      subsections: [
        {
          id: "devops-m5-p2s1",
          title: "SLIs, SLOs & SLAs",
          content:
            "SLI (Service Level Indicator): measurable metric (latency p99, error rate, availability). SLO: target threshold (99.9% availability). SLA: contractual commitment with penalties.",
          codeExample:
            '# Common SLIs and calculations\n#!/bin/bash\n# Availability SLI: successful_requests / total_requests\nSUCCESS=$(grep -c \'HTTP/1.1 2\' access.log)\nTOTAL=$(wc -l < access.log)\nAVAIL=$(echo "scale=4; $SUCCESS/$TOTAL*100" | bc)\necho "Availability: $AVAIL%"\n\n# Error budget calculation\nSLO=99.9\nDAYS=30\nTOTAL_MINS=$(echo "$DAYS * 24 * 60" | bc)\nBUDGET=$(echo "scale=2; $TOTAL_MINS * (1 - $SLO/100)" | bc)\necho "Error budget: $BUDGET minutes"',
          video: { youtubeId: "CBqADllU52s", title: "SLIs & SLOs" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m5-p2s2",
          title: "On-Call & Incident Response",
          content:
            "PagerDuty/OpsGenie rotate on-call. Incident severity: P1 (critical), P2 (major), P3 (minor). Runbooks document steps to resolve known issues.",
          codeExample:
            "# Incident response runbook template\n# incident_runbook.md\n\n## Service: API Gateway\n## Alert: HighErrorRate (> 5% for 5 min)\n\n### Detection\n# Check Grafana: api_error_rate panel\n# Check CloudWatch: ALB 5xx metrics\n\n### Diagnosis\ngit log --oneline -10       # recent deployments\nkubectl get pods -n prod    # pod health\nkubectl logs -l app=api --tail=50 | grep ERROR\n\n### Mitigation\n# Option 1: Rollback deployment\nkubectl rollout undo deployment/api\n# Option 2: Scale up\nkubectl scale deployment api --replicas=5",
          video: { youtubeId: "CBqADllU52s", title: "On-Call & Incidents" },
          flowchart: "if-else",
        },
        {
          id: "devops-m5-p2s3",
          title: "Reliability Engineering",
          content:
            "Chaos engineering proactively tests resilience by injecting failures. Capacity planning forecasts resource needs. Load testing (k6, Locust) validates performance under stress.",
          codeExample:
            "# k6 load test script\n# import http from 'k6/http';\n# import { check, sleep } from 'k6';\n\n# export let options = {\n#   stages: [\n#     { duration: '2m', target: 100 },  // ramp up\n#     { duration: '5m', target: 100 },  // sustained load\n#     { duration: '2m', target: 0 },    // ramp down\n#   ],\n#   thresholds: {\n#     http_req_duration: ['p(95)<500'],  // 95% under 500ms\n#     http_req_failed: ['rate<0.01'],    // < 1% errors\n#   },\n# };\n\n# Chaos: kill random pod to test resilience\nkubectl delete pod $(kubectl get pods -o name | shuf -n 1)",
          video: { youtubeId: "CBqADllU52s", title: "Reliability Engineering" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "devops-m5-p3",
      title: "Part 3: Security in DevOps",
      description: "DevSecOps, secrets management, and supply chain security.",
      videoUrl: "https://www.youtube.com/watch?v=J73MELGF1AE",
      notes:
        "DevSecOps integrates security into every phase of the CI/CD pipeline — shift-left means catching vulnerabilities before production.",
      docs: [
        {
          label: "OWASP DevSecOps",
          url: "https://owasp.org/www-project-devsecops-guideline/",
        },
        {
          label: "HashiCorp Vault",
          url: "https://developer.hashicorp.com/vault/docs",
        },
      ],
      partQuiz: [
        {
          question: "What does 'shift-left security' mean?",
          options: [
            "Move security team left",
            "Integrate security earlier in development",
            "Left-side deployment",
            "Reduce security budget",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is SAST?",
          options: [
            "Static Application Security Testing",
            "Server-side Auth Token",
            "Staged App Scan Tool",
            "Security Audit System",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What tool scans Docker images for vulnerabilities?",
          options: ["SonarQube", "Trivy", "OWASP ZAP", "Snyk only"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is HashiCorp Vault used for?",
          options: [
            "IaC",
            "Secrets management and dynamic credentials",
            "Container orchestration",
            "Log aggregation",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a software supply chain attack?",
          options: [
            "Attacking the CI/CD pipeline",
            "Compromising dependencies to inject malicious code",
            "DDoS on deployment servers",
            "Stealing source code",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "devops-m5-p3-prog1",
          title: "Add security scanning to CI",
          description:
            "Write a GitHub Actions job 'security-scan' that runs after 'build': checks out code, scans dependencies with 'npm audit --audit-level=high', and scans the Docker image with Trivy.",
          starterCode:
            "# Add to .github/workflows/ci.yml\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm ci && docker build -t myapp .\n  security-scan:\n    # Write this job\n",
          hints: [
            "Add needs: [build] to make security-scan depend on build",
            "Use runs-on: ubuntu-latest with actions/checkout@v3",
            "Run npm audit --audit-level=high, then use aquasecurity/trivy-action to scan myapp image",
          ],
          language: "yaml",
        },
      ],
      subsections: [
        {
          id: "devops-m5-p3s1",
          title: "DevSecOps Pipeline",
          content:
            "Integrate security at every pipeline stage: pre-commit hooks (secrets scan), SAST in CI (SonarQube), DAST on staging (OWASP ZAP), container scanning (Trivy), dependency audit.",
          codeExample:
            "# Security in GitHub Actions pipeline\njobs:\n  security:\n    steps:\n      # Scan for hardcoded secrets\n      - uses: gitleaks/gitleaks-action@v2\n      \n      # Dependency vulnerability scan\n      - run: npm audit --audit-level=high\n      \n      # Static code analysis\n      - uses: SonarSource/sonarcloud-github-action@master\n      \n      # Container image scanning\n      - uses: aquasecurity/trivy-action@master\n        with:\n          image-ref: 'myapp:latest'\n          severity: 'CRITICAL,HIGH'\n          exit-code: '1'",
          video: { youtubeId: "J73MELGF1AE", title: "DevSecOps Pipeline" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "devops-m5-p3s2",
          title: "Secrets Management",
          content:
            "Never hardcode secrets. Use Vault for dynamic credentials, AWS Secrets Manager for cloud secrets, GitHub Secrets for CI/CD. Rotate credentials regularly.",
          codeExample:
            "# HashiCorp Vault usage\n# Start Vault (dev mode)\nvault server -dev &\nexport VAULT_ADDR='http://127.0.0.1:8200'\n\n# Store a secret\nvault kv put secret/myapp \\\n  db_password=SuperSecret123 \\\n  api_key=abc-xyz-789\n\n# Read secret\nvault kv get secret/myapp\nvault kv get -field=db_password secret/myapp\n\n# In app (Node.js)\n# const vault = require('node-vault')({ endpoint: process.env.VAULT_ADDR });\n# const { data } = await vault.read('secret/data/myapp');\n# const dbPassword = data.data.db_password;",
          video: { youtubeId: "J73MELGF1AE", title: "Secrets Management" },
          flowchart: "if-else",
        },
        {
          id: "devops-m5-p3s3",
          title: "Zero Trust & Supply Chain",
          content:
            "Zero Trust: verify every request, least privilege always. SBOM (Software Bill of Materials) documents all dependencies. Sign images with cosign for supply chain integrity.",
          codeExample:
            "# Supply chain security\n# Generate SBOM with Syft\nsynft myapp:latest -o spdx-json > sbom.json\n\n# Sign container image with cosign\ncosign sign --key cosign.key myapp:latest\n\n# Verify signature\ncosign verify --key cosign.pub myapp:latest\n\n# Zero Trust: Network Policy in Kubernetes\n# apiVersion: networking.k8s.io/v1\n# kind: NetworkPolicy\n# spec:\n#   podSelector: {matchLabels: {app: api}}\n#   ingress:\n#   - from: [{podSelector: {matchLabels: {app: frontend}}}]\n#     ports: [{port: 3000}]\n#   egress:\n#   - to: [{podSelector: {matchLabels: {app: db}}}]",
          video: {
            youtubeId: "J73MELGF1AE",
            title: "Zero Trust & Supply Chain",
          },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What are the 4 DORA metrics?",
      options: [
        "Speed, Quality, Cost, Risk",
        "Deploy Frequency, Lead Time, MTTR, Change Failure Rate",
        "Uptime, Latency, Errors, Saturation",
        "Builds, Tests, Deploys, Rollbacks",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the main goal of chaos engineering?",
      options: [
        "Break production",
        "Proactively find weaknesses before they cause incidents",
        "Test developer skills",
        "Reduce infrastructure costs",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does DAST stand for?",
      options: [
        "Dynamic Application Security Testing",
        "Deployed App Scan Tool",
        "DevOps Automated Security Test",
        "Database Application Stress Test",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What is a blameless postmortem?",
      options: [
        "Firing the responsible person",
        "Incident review focused on systems, not individuals",
        "Post-release celebration",
        "Final test before deploy",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 99.9% SLO allow per month in downtime?",
      options: ["0 minutes", "43.8 minutes", "4.38 hours", "1 day"],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "devops-m5-test1",
      title: "Design a Secure CI/CD Pipeline",
      description:
        "Write a complete GitHub Actions workflow with jobs: test (npm test), security-scan (npm audit + Trivy image scan), build (docker build), and deploy (to staging). Security scan must pass before build.",
      starterCode:
        "# .github/workflows/secure-pipeline.yml\nname: Secure CI/CD\non:\n  push:\n    branches: [main]\n# Design the full pipeline with proper job dependencies\n",
      hints: [
        "Use needs: [test] for security-scan, needs: [security-scan] for build, needs: [build] for deploy",
        "In security-scan: npm audit --audit-level=high and aquasecurity/trivy-action",
        "Add environment: staging to deploy job with approval requirement",
      ],
    },
  ] as CTestProblem[],
};

// ─── Course Assembly ───────────────────────────────────────────────────────────

export const DEVOPS_COURSE = {
  id: "devops-course",
  name: "DevOps",
  icon: "⚙️",
  color: "#f97316",
  description:
    "Master Linux, CI/CD, Docker, Kubernetes, Terraform, AWS, and DevSecOps practices.",
  modules: [
    devops_module0,
    devops_module1,
    devops_module2,
    devops_module3,
    devops_module4,
    devops_module5,
  ] as unknown as CModule[],
  timeLimit: 30,
  allowChat: false,
};

export const DEVOPS_ROADMAP_ENTRY = {
  id: "devops",
  name: "DevOps",
  icon: "⚙️",
  color: "#f97316",
  description:
    "CI/CD pipelines, containers, cloud infrastructure, and reliability engineering.",
  courseId: "devops-course",
  domains: [
    "Linux & Shell Scripting",
    "Version Control & CI/CD",
    "Containerization (Docker & K8s)",
    "Cloud & Infrastructure (AWS + Terraform)",
    "DevOps Practices & Security",
  ],
};
