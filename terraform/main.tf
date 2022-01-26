terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"

  backend "s3" {
    bucket = "monada-terraform-states"
    key    = "monada-analytics"
    workspace_key_prefix = "environments"
    region = "us-east-1"
    profile = "monada"
  }
}

provider "aws" {
  profile = "monada"
  region  = "us-east-1"
}


resource "aws_s3_bucket" "s3_lambda_source_code_bucket" {
	bucket = "${local.project_prefix}-lambda-source-code"
	acl    = "private"
	versioning {
		enabled = true
	}

	lifecycle {
	  prevent_destroy = true
	}
}