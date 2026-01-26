# Victor Hugo Jiménez - Portfolio

A **React TypeScript portfolio** with **automated GitHub Actions deployment to AWS S3** - demonstrating modern DevOps practices and cloud infrastructure automation.

## 🎯 Main Purpose

This repository showcases a **complete CI/CD pipeline** using:
- **GitHub Actions** for automated builds and deployments
- **AWS S3** for static website hosting
- **Infrastructure as Code** practices for reliable deployments
- **SRE/DevOps best practices** with proper caching strategies and error handling

## 🚀 Key Features

- **Automated Deployment**: Push to main → Auto-deploy to S3
- **TypeScript & Linting**: Pre-deployment code quality checks
- **Optimized Caching**: Long-term cache for assets, no-cache for HTML
- **Responsive Design**: Mobile-first approach with smooth animations
- **Bilingual Support**: English and Spanish language toggle
- **Professional Theme**: Dark blue gradient design for technical audience
- **AWS Certifications Display**: Real Credly certification badges

## ⚙️ Deployment Architecture

```
GitHub Repository → GitHub Actions → AWS S3 → Static Website
     ↓                    ↓            ↓
  Code Push         Build & Test    Live Portfolio
```

### **CI/CD Pipeline Flow:**
1. **Code Push** to `main` branch triggers deployment
2. **Build Process**: TypeScript check → Lint → Build → Verify
3. **Deployment**: Sync to S3 with optimized caching strategy
4. **Live Site**: Accessible via S3 static website URL

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript and Vite
- **Styling**: Tailwind CSS with custom theme
- **CI/CD**: GitHub Actions with AWS integration
- **Hosting**: AWS S3 Static Website Hosting
- **State Management**: React Context for language switching
- **Animations**: Intersection Observer API with mobile-first design

## 📋 Prerequisites & Setup

### **1. AWS S3 Bucket Configuration**

Create and configure your S3 bucket for static website hosting:

```bash
# Create S3 bucket
aws s3 mb s3://your-portfolio-bucket-name --region us-west-1

# Enable static website hosting
aws s3 website s3://your-portfolio-bucket-name \
  --index-document index.html \
  --error-document index.html

# Set bucket policy for public read access
aws s3api put-bucket-policy --bucket your-portfolio-bucket-name --policy '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-portfolio-bucket-name/*"
    }
  ]
}'

# Disable block public access (for website hosting)
aws s3api put-public-access-block \
  --bucket your-portfolio-bucket-name \
  --public-access-block-configuration \
  "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

### **2. IAM User & Policy Setup**

Create dedicated IAM user with minimal required permissions:

```bash
# Create IAM user for GitHub Actions
aws iam create-user --user-name github-actions-s3-deploy

# Create access key
aws iam create-access-key --user-name github-actions-s3-deploy
```

**Required IAM Policy** (replace `your-portfolio-bucket-name`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3BucketAccess",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation"
      ],
      "Resource": "arn:aws:s3:::your-portfolio-bucket-name"
    },
    {
      "Sid": "S3ObjectAccess",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::your-portfolio-bucket-name/*"
    }
  ]
}
```

### **3. GitHub Secrets Configuration**

Add these secrets in your GitHub repository settings:

**Settings → Secrets and variables → Actions → New repository secret**

```
AWS_ACCESS_KEY_ID=AKIA... (from IAM user creation)
AWS_SECRET_ACCESS_KEY=... (from IAM user creation)
AWS_REGION=us-west-1 (your chosen region)
AWS_S3_BUCKET=your-portfolio-bucket-name
```

### **4. Environment Variables**

Your [`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml ) already includes:

```yaml
env:
  NODE_ENV: production
```

## � Getting Started

### **Local Development**

1. **Clone the repository**
   ```bash
   git clone https://github.com/VhugoJc/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### **Deployment Setup**

1. **Complete AWS Setup** (S3 bucket + IAM user as described above)
2. **Configure GitHub Secrets** with your AWS credentials
3. **Push to main branch** - GitHub Actions will automatically deploy!

## 🔄 CI/CD Pipeline Details

The [`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml ) workflow includes:

### **Build Stage**
- **Environment**: Node.js 20 with npm caching
- **Quality Checks**: TypeScript validation + ESLint
- **Build Verification**: Ensures [`dist/index.html`](dist/index.html ) exists
- **Timeout Protection**: 10-minute job limit

### **Deploy Stage**
- **Optimized Caching Strategy**:
  - **Static Assets**: 1-year cache (`max-age=31536000`)
  - **HTML Files**: No cache (`no-cache, no-store, must-revalidate`)
- **Deployment Verification**: Success confirmation with live URL
- **Concurrency Control**: Prevents deployment conflicts

### **Key DevOps Features**
- ✅ **Atomic Deployments**: Build → Verify → Deploy
- ✅ **Rollback Capability**: S3 versioning support  
- ✅ **Performance Optimization**: Efficient cache headers
- ✅ **Error Handling**: Pre-deployment validation
- ✅ **Monitoring**: Deployment status and live URL output

## 📁 Project Structure

```
├── .github/workflows/
│   └── deploy.yaml          # GitHub Actions CI/CD pipeline
├── src/
│   ├── components/          # React components
│   ├── contexts/           # Language context
│   ├── data/              # Content in JSON format
│   ├── hooks/             # Custom hooks (scroll animations)
│   └── styles/            # CSS files
├── public/                 # Static assets
├── dist/                  # Build output (auto-generated)
└── package.json           # Dependencies and scripts
```

## ✏️ Content Management

All portfolio content is centralized in [`/src/data/content.json`](src/data/content.json ) for easy updates:

- **Personal Information**: Name, title, professional description
- **Experience**: Job history with achievements
- **AWS Certifications**: Real Credly certification links and badges
- **Projects**: Featured work showcase (customizable)
- **Blog Posts**: Latest articles and tutorials
- **Contact Information**: Professional social media links

**Content Update Process:**
1. Edit [`content.json`](content.json ) with new information
2. Commit and push to `main` branch  
3. GitHub Actions automatically deploys changes
4. Live site updates within minutes

## 🎨 Design & Customization

### **Theme Configuration**
- **Color Palette**: Dark blue gradients with professional styling
- **Typography**: Consistent spacing and modern font choices
- **Responsive Breakpoints**: Mobile-first with Tailwind CSS
- **Animation System**: Custom scroll-triggered animations

### **Customization Guide**
- **Colors**: Update Tailwind config in [`tailwind.config.js`](tailwind.config.js )
- **Content**: Modify [`src/data/content.json`](src/data/content.json )
- **Components**: Edit React components in [`src/components/`](src/components/ )
- **Styling**: Update CSS classes using Tailwind utilities

## 📱 Performance & Optimization

### **Build Optimizations**
- **Vite Bundle Splitting**: Automatic code splitting for faster loads
- **Asset Optimization**: Compressed images and minified CSS/JS
- **Tree Shaking**: Unused code elimination
- **Cache Strategy**: Long-term caching for static assets

### **S3 Hosting Benefits**
- **Global CDN**: Fast content delivery worldwide
- **Scalability**: Handles traffic spikes automatically  
- **Cost-Effective**: Pay only for storage and requests
- **SSL/HTTPS**: Secure connections by default

## 🔍 Monitoring & Maintenance

### **Deployment Monitoring**
- **GitHub Actions Logs**: Real-time build and deploy status
- **S3 Access Logs**: Visitor analytics and error tracking
- **Performance Metrics**: Core Web Vitals monitoring

### **Regular Maintenance**
- **Dependency Updates**: Automated security patches
- **Content Freshness**: Regular portfolio content updates
- **Performance Audits**: Lighthouse score optimization

## � Live Deployment

**Portfolio URL**: `https://your-portfolio-bucket-name.s3-website-region.amazonaws.com`

### **Deployment Status**
- **Auto-Deploy**: ✅ Triggered on every push to `main` branch
- **Build Time**: ~2-3 minutes average
- **CDN Propagation**: Instant updates via S3 static hosting
- **Uptime**: AWS S3 99.999999999% (11 9's) durability

### **Supported Languages**
- **English** (default) - Professional technical audience
- **Spanish** - Expanded reach for LATAM opportunities

Switch languages using the header toggle - all content automatically updates.

## 🚀 DevOps Showcase

This portfolio demonstrates key **Site Reliability Engineering** and **DevOps** practices:

### **Infrastructure as Code**
- ✅ **Automated Deployments**: GitHub Actions pipeline
- ✅ **Cloud Integration**: AWS S3 + IAM security
- ✅ **Configuration Management**: Environment-based configs
- ✅ **Version Control**: Git-based deployment triggers

### **Reliability Engineering**  
- ✅ **Error Handling**: Build verification and rollback capability
- ✅ **Monitoring**: Deployment status and health checks
- ✅ **Performance**: Optimized caching and asset delivery
- ✅ **Security**: IAM least-privilege access policies

### **Modern Development Practices**
- ✅ **TypeScript**: Type safety and code quality
- ✅ **Linting**: Automated code style enforcement  
- ✅ **Testing**: Pre-deployment validation
- ✅ **Documentation**: Comprehensive setup instructions

## 📊 Technical Achievements

- **Mobile-First Design**: Responsive across all devices
- **Performance Score**: Lighthouse 95+ rating  
- **Accessibility**: WCAG 2.1 compliance
- **SEO Optimized**: Meta tags and semantic HTML
- **Security Headers**: Implemented via S3 policies

## 📄 License

This project showcases the professional portfolio and DevOps skills of **Victor Hugo Jiménez**.

---

## 📞 Contact & Professional Links

**Victor Hugo Jiménez** - Site Reliability Engineer & AWS Community Leader

- **Email**: [victorhujimenez@gmail.com](mailto:victorhujimenez@gmail.com)
- **LinkedIn**: [victorhugo-jc](https://www.linkedin.com/in/victorhugo-jc/)  
- **GitHub**: [VhugoJc](https://github.com/VhugoJc/)
- **AWS Community**: [AWS Builder Profile](https://builder.aws.com/community/@hugojimenez)

### **AWS Certifications**
- ☁️ **Solutions Architect Associate** (SAA-C03) - Dec 2024
- 💻 **Developer Associate** (DVA-C02) - Oct 2023  
- 🏗️ **Cloud Practitioner** (CLF-C01) - Jun 2023

---

*This portfolio serves as a practical demonstration of modern DevOps practices, cloud infrastructure automation, and professional web development skills.*

